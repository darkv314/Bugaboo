export type Code = {
    id?: number;
    code: string;
    language: string;
    description: string;
    title: string;
};

export type CodeGet = {
    id: number;
    attributes: Code;
};

