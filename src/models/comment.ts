import { UserI } from "./user";

export interface CommentI {
    message: string;
    upvotes: number;
    downvotes: number;
    code: number;
    users_permissions_user: { data: { attributes: UserI } };
    codeLine: string;
    numberCodeLine: number;
    createdAt: string;
}

export type CommentGetI = {
    attributes: CommentI;
}