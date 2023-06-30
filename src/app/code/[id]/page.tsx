"use client";
import Badge from "@/components/badge/Badge";
import { useParams } from "next/navigation";
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

export default function Page() {
  const params = useParams();
  const { id } = params;
  const { auth, setAuth } = useAuth();
  const [code, setCode] = useState<Code>();
  const [modalOpen, setModalOpen] = useState(false);
  const [commentLine, setCommentLine] = useState("");

  const handleComment = (line: LineModel) => {
    console.log(line);
    setCommentLine(line.text);
    setModalOpen(true);
  };

  useEffect(() => {
    codeService.getCode(auth.token, Number(id)).then((res) => {
      setCode(res.data.attributes);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 lg:px-72 py-8 flex flex-col gap-4">
      <Modal
        setOpen={setModalOpen}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div className="flex flex-col gap-4">
          <Badge theme="secondary" id="comment">
            COMMENT
          </Badge>
          <p className="text-lg">{commentLine}</p>
          {/* post comment */}
          <div className="flex gap-4">
            <CustomButton
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancel
            </CustomButton>
            <CustomButton
              theme="secondary"
              onClick={() => {
                commentService.postComment(auth.token, {
                  message: "test",
                  upvotes: 0,
                  downvotes: 0,
                  code: Number(id),
                  users_permissions_user: Number(auth.userId),
                });
                setModalOpen(false);
              }}
            >
              Post
            </CustomButton>
          </div>
        </div>
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
    </main>
  );
}
