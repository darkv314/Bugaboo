import { SquareCursor } from "iconoir-react";
import CustomButton from "../interactive/CustomButton";
import ImageButton from "../interactive/ImageButton";
import { Links } from "./Links";
import { navBarNoAuth } from "@/data/data";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-dark w-full py-10 sm:px-72 backdrop-blur-md flex items-center justify-center xl:justify-between">
            <div className="hidden xl:block">
                <Links linksList={navBarNoAuth} isRow />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 items-center">
                <Link href="login">
                    <CustomButton theme={"secondary"}>Login</CustomButton>
                </Link>
                <Link href="sign-up">
                    <CustomButton theme="imageButton">
                        <ImageButton icon={<SquareCursor />}>
                            <span className="whitespace-nowrap">Join now!</span>
                        </ImageButton>
                    </CustomButton>
                </Link>
            </div>
        </nav>
    );
}
