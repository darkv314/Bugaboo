"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({
  children,
  defaultClassName = "",
  activeClassName = "",
  ...rest
}: { children: React.ReactNode } & LinkProps & {
    defaultClassName: string;
    activeClassName: string;
  }) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link {...rest} className={isActive ? activeClassName : defaultClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
