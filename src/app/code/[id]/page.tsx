"use client";
import Badge from "@/components/badge/Badge";
import { useParams, useRouter } from "next/navigation";
import CodeMirror from "@uiw/react-codemirror";
import { use, useEffect, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { linesAddPlusGutter } from "@/utils/@codemirror/glutter/src";
import { LineModel } from "@/models/@codemirror/LineModel";
import { codeService } from "@/services/codeServices";
import useAuth from "@/hooks/useAuth";
import { Code } from "@/models/code";
import Modal from "@/components/interactive/Modal";
import { set } from "react-hook-form";
import { commentService } from "@/services/commentServices";
import CustomButton from "@/components/interactive/CustomButton";
import CommentCodeForm from "./CommentCodeForm";
import Link from "next/link";
import ImageButton from "@/components/interactive/ImageButton";
import { SquareCursor, User } from "iconoir-react";
import { Comment } from "./Comment";
import { stringToDate } from "@/app/utils/stringTodate";

type CommentLine = {
  from: number;
  number: number;
  text: string;
  to: number;
};

export default function Page() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  const [code, setCode] = useState<Code>();
  const [modalOpen, setModalOpen] = useState(false);
  const [commentLine, setCommentLine] = useState<CommentLine>({
    from: 0,
    number: 0,
    text: "",
    to: 0,
  });

  const handleComment = (line: LineModel) => {
    console.log(line);
    setCommentLine(line);
    setModalOpen(true);
  };

  useEffect(() => {
    codeService.getCode(auth.token, Number(id)).then((res) => {
      setCode(res.data.attributes);
    });
  }, [modalOpen]);

  return (
    <main className="min-h-screen bg-white px-4 lg:px-72 py-8 flex flex-col gap-4">
      <Modal
        setOpen={setModalOpen}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {auth.token ? (
          <CommentCodeForm
            setModalOpen={setModalOpen}
            codeLine={commentLine?.text}
            numberCodeLine={commentLine?.number}
          />
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold font-cabin">
              You need to be logged in to comment 😢
            </h1>
            <div className="flex gap-2  w-full">
              <CustomButton
                onClick={() => {
                  router.push(`/login?callbackUrl=/code/${id}`);
                }}
                theme="secondary"
              >
                Login
              </CustomButton>

              <CustomButton
                onClick={() => {
                  router.push("/sign-up");
                }}
                theme="imageButton"
              >
                <ImageButton icon={<SquareCursor />}>Sign Up</ImageButton>
              </CustomButton>
            </div>
          </div>
        )}
      </Modal>
      <Badge theme="secondary" id="codes">
        CODES
      </Badge>
      <h1 className="text-4xl font-bold font-cabin">{code?.title}</h1>
      <p className="text-lg">{code?.description}</p>
      {/* *TODO  language */}
      <CodeMirror
        height="400px"
        theme={"dark"}
        extensions={[
          javascript(),
          linesAddPlusGutter(handleComment, {
            backgroundColor: "#3E404B",
          }),
        ]}
        editable={false}
        value={code?.code}
        placeholder={"// Enter your code here"}
      />

      <div className="flex flex-row gap-4 my-2 items-center justify-around sm:justify-between">
        <div className="flex flex-row gap-4 items-center">
          <User />
          <span className="text-start text-sm font-cabin">
            {code?.users_permissions_user.data.attributes.username}
          </span>
        </div>
        <time className="hidden sm:block text-start text-sm font-cabin">
          {code && stringToDate(code.createdAt).toLocaleString()}
        </time>
      </div>

      {/* Comentarios */}
      <div className="flex flex-col gap-5">
        <Badge theme="secondary" id="comments">
          COMMENTS
        </Badge>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 items-center justify-around sm:justify-between">
            {code?.comments.data.map((comment, index) => (
              <Comment
                comment={comment.attributes}
                idComment={comment.id}
                key={comment.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
