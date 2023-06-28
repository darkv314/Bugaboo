'use client';
import { CodeMirror } from "@/components/interactive/CodeMirror";
import { useState } from "react";

function page() {
  const [code, setCode] = useState<string>("");
  return (
    <main className="min-h-screen bg-white px-4 lg:px-72 py-40 flex flex-col gap-16">
      <CodeMirror language="javascript" value={code} />
    </main>
  );
}

export default page;
