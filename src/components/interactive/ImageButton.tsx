"use client";
import React from "react";

interface ImageButtonProps {
  children: React.ReactNode;
}

function ImageButton({ children }: ImageButtonProps) {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ width: "1.7em", height: "1.7em" }}
        className="bg-secondary rounded-full text-black group-hover:bg-primary content-center flex items-center justify-center"
      >
        {children}
      </div>
      <p>Join now!</p>
    </div>
  );
}

export default ImageButton;
