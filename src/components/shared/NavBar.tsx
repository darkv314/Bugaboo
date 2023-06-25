import { navBarNoAuth } from "@/data/data";
import { SquareCursor } from "iconoir-react";
import ActiveLink from "./NavLink";
import CustomButton from "../interactive/CustomButton";
import ImageButton from "../interactive/ImageButton";

export default function Navbar() {
  const defaultClass =
    "group text-white hover:text-primary rounded-md text-sm font-medium circle flex items-center gap-3";
  const activeClass =
    "text-secondary rounded-md text-sm font-medium circle flex items-center gap-3 [&>div]:border-secondary [&>div]:bg-secondary";

  return (
    <nav className="bg-dark w-full py-10 px-72 backdrop-blur-md flex items-center justify-between">
      <div className="flex-shrink-0">
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
      <div className="block">
        <div className="flex gap-5 items-center">
        <CustomButton theme={"secondary"}>Join</CustomButton>
        <CustomButton theme="imageButton">
          <ImageButton icon={<SquareCursor />}>Join now!</ImageButton>
        </CustomButton>
        </div>
      </div>
    </nav>
  );
}
