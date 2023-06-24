"use client";

import CustomButton from "@/components/interactive/CustomButton";
import ImageButton from "@/components/interactive/ImageButton";
import { JavascriptOriginal } from "devicons-react";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import dynamic from "next/dynamic";
import { lineNumbersRelative } from "@/utils/@codemirror/glutter/src";

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <CustomButton>Login</CustomButton>
        <CustomButton theme="secondary">More news</CustomButton>
        <CustomButton theme="imageButton">
          <ImageButton icon={<JavascriptOriginal />}>Join now!</ImageButton>
        </CustomButton>
        <CodeMirror
          value="console.log('hello world!');"
          height="100svh"
          width="40em"
          theme={dracula}
          extensions={[javascript({ jsx: true }), lineNumbersRelative]}
          onChange={(value) => console.log(value)}
          placeholder={"// Enter your code here"}
        />
      </div>
    </main>
  );
}
