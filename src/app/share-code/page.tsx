"use client";
// import { CodeMirror } from "@/components/interactive/CodeMirror";
import { useState } from "react";
import ShareCodeForm from "./ShareCodeForm";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { LineModel } from "@/models/@codemirror/LineModel";
import { linesAddPlusGutter } from "@/utils/@codemirror/glutter/src";

function page() {
    const [code, setCode] = useState<string>("");
    const handleComment = (line: LineModel) => {
        console.log(line);
    };

    const extensions = [
        linesAddPlusGutter(handleComment, {
            backgroundColor: "#3E404B",
        }),
    ];

    const language = "javascript";

    const languagePlugin =
        language === "javascript"
            ? extensions.push(javascript({ jsx: true }))
            : null;

    return (
        <main className="min-h-screen bg-white px-4 lg:px-72 py-40 flex flex-col gap-16">
            <ShareCodeForm />
            {/* <CodeMirror language="javascript" value={code} /> */}
            <CodeMirror
                height="400px"
                theme={"dark"}
                onChange={(value) => {
                    setCode(value);
                    console.log(value);
                }}
                extensions={extensions}
                placeholder={"// Enter your code here"}
            />
        </main>
    );
}

export default page;
