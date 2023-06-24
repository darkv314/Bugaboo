"use client";
import React from "react";

interface ImageButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function ImageButton({ children, icon }: ImageButtonProps) {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ width: "1.7em", height: "1.7em" }}
        className="bg-secondary rounded-full text-black group-hover:bg-primary content-center flex items-center justify-center"
      >
        {icon}
      </div>
      <p>{children}</p>
    </div>
  );
}

export default ImageButton;
