import { navBarNoAuth } from "@/data/data";
import { ChatLines, SquareCursor } from "iconoir-react";
import Link from "next/link";
import ActiveLink from "./NavLink";
import CustomButton from "../interactive/CustomButton";
import ImageButton from "../interactive/ImageButton";
import { cabin } from "@/styles/fonts";

export default function Navbar() {
    const defaultClass =
        "group text-white hover:text-primary rounded-md text-sm font-medium circle flex items-center gap-3";
    const activeClass =
        "text-secondary rounded-md text-sm font-medium circle flex items-center gap-3 [&>div]:border-secondary [&>div]:bg-secondary";

    return (
        <nav className="bg-dark w-full py-10 px-72 backdrop-blur-md flex items-center justify-between">
            <div className="flex-shrink-0">
                <Link
                    style={cabin.style}
                    className="flex items-center gap-3"
                    href="/"
                >
                    <ChatLines className="h-8 w-8 text-primary" />
                    <h1 className="text-2xl font-bold text-primary">Bugaboo</h1>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-5 items-center">
                    {navBarNoAuth.map((item, index) => (
                        <li key={index}>
                            {item.button ? (
                                <CustomButton theme={item.button}>
                                    {!item.icon ? (
                                        item.name
                                    ) : (
                                        <ImageButton icon={<SquareCursor />}>
                                            {item.name}
                                        </ImageButton>
                                    )}
                                </CustomButton>
                            ) : (
                                <ActiveLink
                                    activeClassName={activeClass}
                                    defaultClassName={defaultClass}
                                    href={item.path}
                                >
                                    <div className="rounded-full border-2 border-white w-2 h-2 group-hover:border-primary group-hover:bg-primary"></div>
                                    {item.name}
                                </ActiveLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
