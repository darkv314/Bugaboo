import React from "react";
import codeImage from "@/assets/images/cuteBoo3.jpg";
import Image from "next/image";
import { ArrowDownCircle, ArrowUpCircle, Upload } from "iconoir-react";
import { CommentI } from "@/models/comment";
import { stringToDate } from "@/app/utils/stringTodate";

interface CommentProps {
  comment: CommentI;
  idComment: number;
}

export const Comment: React.FC<CommentProps> = ({ comment, idComment }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <article className="flex flex-row sm:gap-4 items-center justify-around sm:justify-between">
        <Image
          src={codeImage}
          alt="Hero Image"
          className="hidden sm:block object-cover object-center w-16 h-16 rounded-full"
        />
        <span className="text-start text-sm font-cabin">
          {comment.users_permissions_user?.data.attributes.username}
        </span>

        <div className="hidden sm:block w-px h-6 bg-secondaryDark"></div>

        <time className="hidden sm:block text-start text-sm font-cabin">
          {stringToDate(comment.createdAt || "").toLocaleString()}
        </time>
        <div className="flex gap-1">
          <span className="text-start text-sm font-cabin text-red-400">
            {comment.downvotes}
          </span>
          <ArrowDownCircle className="hover:text-red-800" />
        </div>
        <div className="flex gap-1">
          <span className="text-start text-sm font-cabin text-green-800">
            {comment.upvotes}
          </span>
          <ArrowUpCircle className="hover:text-secondary" />
        </div>
      </article>
      <hr className="border-px border-secondaryDark"></hr>
      {
        <div className="flex flex-col gap-2">
          <p className="text-lg">{comment.message}</p>
          <div className="flex flex-row gap-4">
            <Upload />
            <span className="text-start text-sm font-cabin">
              {comment.numberCodeLine} : {comment.codeLine}
            </span>
          </div>
        </div>
      }
    </div>
  );
};
