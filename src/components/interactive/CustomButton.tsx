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
  },
  secondary: {
    bgColor: "bg-primary",
    textColor: "text-black",
    bgColorHover: "hover:bg-black",
    textColorHover: "hover:text-white",
    borderHover: "",
    border: "",
  },
  imageButton: {
    bgColor: "bg-light",
    textColor: "text-black",
    bgColorHover: "group hover:bg-black ho",
    textColorHover: "hover:text-white",
    borderHover: "",
    border: "border-2 border-black",
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
      ${buttonConfig[theme]?.border} py-2 px-3 rounded-3xl w-full`}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
