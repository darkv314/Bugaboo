import { ReactNode } from "react";

const badgeConfig = {
  primary: {
    bgColor: "bg-primary",
    textColor: "text-dark",
    width: "w-full min-w-[7em]",
  },
  secondary: {
    bgColor: "bg-secondary",
    textColor: "text-dark",
    width: "w-full min-w-[7em]",
  },
};

type ButtonProps = {
  theme?: keyof typeof badgeConfig;
  children: ReactNode;
};

function Badge({ theme = "primary", children }: ButtonProps) {
  return (
    <span
      className={`${badgeConfig[theme]?.bgColor} 
      ${badgeConfig[theme]?.textColor} text-base py-2 px-3 rounded-3xl uppercase ${badgeConfig[theme]?.width}`}
    >
      {children}
    </span>
  );
}

export default Badge;
