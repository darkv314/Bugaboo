"use client";
import React from "react";
import { IconoirProvider, ProfileCircle } from "iconoir-react";

function ImageButton() {
  return (
    <div className="flex gap-2 items-center">
      <ProfileCircle
        height={"1.75em"}
        width={"1.75em"}
        className="bg-secondary rounded-full text-black group-hover:bg-primary"
      />
      <p>Join now!</p>
    </div>
  );
}

export default ImageButton;
