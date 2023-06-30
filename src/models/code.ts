import { UserI } from "./user";

export type Code = {
    id?: number;
    code: string;
    language: string;
    description: string;
    title: string;
    createdAt: string;
    users_permissions_user: {data: {attributes: UserI}}
};

export type CodeGet = {
    id: number;
    attributes: Code;
};

