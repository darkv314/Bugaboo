import CustomButton from "@/components/interactive/CustomButton";
import ImageButton from "@/components/interactive/ImageButton";
import { CircleciPlain, JavascriptOriginal } from "devicons-react";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
// import dynamic from "next/dynamic";
import { LineModel } from "@/models/@codemirror/LineModel";
import Navbar from "@/components/shared/NavBar";
import Topbar from "@/components/shared/TopBar";

// const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
//   ssr: false,
// });

export default function Home() {
  function handleComment(res: LineModel) {
    console.log("comment", res);
  }
  return (
    <>
      <header className="w-full">
        <Topbar />
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomButton>Login</CustomButton>
          <CustomButton theme="secondary">More news</CustomButton>
          <CustomButton theme="imageButton">
            <ImageButton icon={<JavascriptOriginal />}>Join now!</ImageButton>
          </CustomButton>

          {/* <CodeMirror
          value="console.log('hello world!');"
          height="100svh"
          width="40em"
          theme={dracula}
          extensions={[
            javascript({ jsx: true }),
            linesAddPlusGutter(handleComment, {
              backgroundColor: "#3E404B",
            }),
          ]}
          onChange={(value) => null}
          placeholder={"// Enter your code here"}
        /> */}
        </div>
      </main>
    </>
  );
}
