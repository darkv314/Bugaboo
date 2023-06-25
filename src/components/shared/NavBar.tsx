import { navBarNoAuth } from "@/data/data";
import { ChatLines } from "iconoir-react";
import Link from "next/link";
import ActiveLink from "./NavLink";

export default function Navbar() {
  const defaultClass =
    "group text-white hover:text-primary rounded-md text-sm font-medium circle flex items-center gap-3";
  const activeClass =
    "text-secondary rounded-md text-sm font-medium circle flex items-center gap-3 [&>div]:border-secondary [&>div]:bg-secondary";

  return (
    <nav className="bg-dark w-full py-10 px-72 backdrop-blur-md flex items-center justify-between">
      <div className="flex-shrink-0">
        <Link className="flex items-center gap-3" href="/">
          <ChatLines className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">Bugaboo</span>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-7 items-baseline">
          {navBarNoAuth.map((item, index) => (
            <li key={index}>
              <ActiveLink
                activeClassName={activeClass}
                defaultClassName={defaultClass}
                href={item.path}
              >
                <div className="rounded-full border-2 border-white w-2 h-2 group-hover:border-primary group-hover:bg-primary"></div>
                {item.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
