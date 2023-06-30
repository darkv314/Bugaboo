"use client";
import Badge from "@/components/badge/Badge";
import { useParams } from "next/navigation";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { linesAddPlusGutter } from "@/utils/@codemirror/glutter/src";
import { LineModel } from "@/models/@codemirror/LineModel";

export default function Page() {
  const params = useParams();
  const { id } = params;

  const [code, setCode] = useState<string>("");

  const handleComment = (line: LineModel) => {
    console.log(line);
  };

  return (
    <main className="min-h-screen bg-white px-4 lg:px-72 py-8 flex flex-col gap-4">
      <Badge theme="secondary" id="codes">
        CODES
      </Badge>
      <h1 className="text-4xl font-bold font-cabin">Code {id}</h1>
      <p className="text-lg">Take a look at the latest shared code</p>
      {/* *TODO  language */}
      <CodeMirror
        height="400px"
        theme={"dark"}
        onChange={(value) => {
          setCode(value);
        }}
        extensions={[
          javascript(),
          linesAddPlusGutter(handleComment, {
            backgroundColor: "#3E404B",
          }),
        ]}
        editable={false}
        value={code}
        placeholder={"// Enter your code here"}
      />
    </main>
  );
}
