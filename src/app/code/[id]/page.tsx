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

export default function Page() {
  const params = useParams();
  const { id } = params;
  const { auth, setAuth } = useAuth();
  const [code, setCode] = useState<Code>();

  const handleComment = (line: LineModel) => {
    console.log(line);
  };

  useEffect(() => {
    codeService.getCode(auth.token, Number(id)).then((res) => {
      setCode(res.data.attributes);
      console.log(res);
    });
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 lg:px-72 py-8 flex flex-col gap-4">
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
