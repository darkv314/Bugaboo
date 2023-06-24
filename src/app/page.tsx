"use client";

import CustomButton from "@/components/interactive/CustomButton";
import ImageButton from "@/components/interactive/ImageButton";
import { JavascriptOriginal } from 'devicons-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <CustomButton>Login</CustomButton>
        <CustomButton theme="secondary">More news</CustomButton>
        <CustomButton theme="imageButton">
          <ImageButton icon={<JavascriptOriginal />}>Join now!</ImageButton>
        </CustomButton>

      </div>
    </main>
  );
}
