import { cabin } from "@/styles/fonts";
import {
  FacebookTag,
  Instagram,
  Twitter,
  LinkedIn,
  ChatLines,
} from "iconoir-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <nav className="bg-dark w-full py-4 sm:px-72 backdrop-blur-md flex items-center justify-center md:justify-between">
      <div>
        <Link className="flex-shrink-0 flex gap-2" href="/">
          <ChatLines className="text-xl text-primary" />
          <span style={cabin.style} className="text-xl text-primary font-bold">
            Bugaboo
          </span>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5 items-center">
          <li>
            <Instagram className="h-8 w-8 text-white" />
          </li>
          <li>
            <FacebookTag className="h-8 w-8 text-white" />
          </li>
          <li>
            <Twitter className="h-8 w-8 text-white" />
          </li>
          <li>
            <LinkedIn className="h-8 w-8 text-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
