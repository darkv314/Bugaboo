export type Code = {
    id?: number;
    code: string;
    language: string;
    description: string;
    title: string;
    createdAt: string;
};

export type CodeGet = {
    id: number;
    attributes: Code;
};

