import { cabin } from "@/styles/fonts";
import { ChatLines } from "iconoir-react";
import Link from "next/link";
import React from "react";

export const Title = () => {
  return (
    <Link className="flex-shrink-0 flex gap-2" href="/">
      <ChatLines className="text-xl text-primary" />
      <span style={cabin.style} className="text-xl text-primary font-bold">
        Bugaboo
      </span>
    </Link>
  );
};