import { FacebookTag, Instagram, Twitter, LinkedIn, Code } from "iconoir-react";

export default function Topbar() {
  const defaultClass =
    "group text-white hover:text-primary rounded-md text-sm font-medium circle flex items-center gap-3";
  const activeClass =
    "text-secondary rounded-md text-sm font-medium circle flex items-center gap-3 [&>div]:border-secondary [&>div]:bg-secondary";

  return (
    <nav className="bg-dark w-full py-4 px-72 backdrop-blur-md flex items-center justify-between">
      <div className="flex-shrink-0 flex gap-2">
        <Code className="text-xl text-primary" />
        <span className="text-xl font-bold text-white">Bugaboo</span>
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
