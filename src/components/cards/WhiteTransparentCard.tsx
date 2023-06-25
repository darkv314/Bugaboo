import { ReactNode } from "react";

type WhiteTransparentCardProps = {
    children: ReactNode;
};

function WhiteTransparentCard({ children }: WhiteTransparentCardProps) {
    return (
        <div className="flex flex-col rounded-2xl items-center bg-white/85 w-full sm:w-1/2 md:w-1/5 m-4 py-12 px-10 gap-2 backdrop-blur-md">
            {children}
        </div>
    );
}

export default WhiteTransparentCard;
