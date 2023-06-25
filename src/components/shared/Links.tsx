import { navBarNoAuth } from "@/data/data";
import React from "react";
import CustomButton from "../interactive/CustomButton";
import ImageButton from "../interactive/ImageButton";
import { SquareCursor } from "iconoir-react";
import ActiveLink from "./NavLink";
import { ILink } from "@/models/links";

interface LinksProps {
  linksList: ILink[];
  isRow: boolean;
}

export const Links: React.FC<LinksProps> = ({ linksList, isRow }) => {
  const defaultClass =
    "group text-white hover:text-primary rounded-md text-sm font-medium circle flex items-center gap-3";
  const activeClass =
    "text-secondary rounded-md text-sm font-medium circle flex items-center gap-3 [&>div]:border-secondary [&>div]:bg-secondary";

  return (
    <ul className={`flex gap-5 items-start ${!isRow && "flex-col"}`}>
      {navBarNoAuth.map((item, index) => {
        return (
          <li key={index}>
            {item.button ? (
              <CustomButton theme={item.button}>
                {!item.icon ? (
                  item.name
                ) : (
                  <ImageButton icon={<SquareCursor />}>{item.name}</ImageButton>
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
        );
      })}
    </ul>
  );
};
