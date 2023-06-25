"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const buttonConfig = {
  primary: {
    bgColor: "bg-dark",
    textColor: "text-white",
    bgColorHover: "hover:bg-white",
    textColorHover: "hover:text-black",
    border: "",
    borderHover: "border-2 border-black",
    width: "w-full min-w-[7em]",
  },
  secondary: {
    bgColor: "bg-primary",
    textColor: "text-black",
    bgColorHover: "hover:bg-black",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-white",
    border: "",
    width: "w-full min-w-[7em]",
  },
  imageButton: {
    bgColor: "bg-light",
    textColor: "text-black",
    bgColorHover: "group hover:bg-black ho",
    textColorHover: "hover:text-white",
    borderHover: "hover:border-2 hover:border-white",
    border: "border-2 border-black",
    width: "w-full min-w-[7em]",
  },
};

type ButtonProps = {
  onClick?: () => void;
  theme?: keyof typeof buttonConfig;
  children: ReactNode;
};

function CustomButton({ onClick, theme = "primary", children }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`${buttonConfig[theme]?.bgColor} 
      ${buttonConfig[theme]?.textColor} ${buttonConfig[theme]?.bgColorHover} 
      ${buttonConfig[theme]?.textColorHover} ${buttonConfig[theme]?.borderHover} 
      ${buttonConfig[theme]?.border} py-2 px-3 rounded-3xl ${buttonConfig[theme]?.width}`}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
