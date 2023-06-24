"use client";
import React from "react";
import { IconoirProvider, ProfileCircle } from "iconoir-react";

function ImageButton() {
    return (
        <div className="flex gap-2 items-center">
            <IconoirProvider
                iconProps={{
                    height: "1.75rem",
                    width: "1.75rem",
                }}
            >
                <ProfileCircle className="bg-secondary rounded-full text-black" />
            </IconoirProvider>
            <p>Join now!</p>
        </div>
    );
}

export default ImageButton;
