import axios from "@/api/axios";
import { AxiosResponse } from "axios";

type Code = {
    code: string;
    language: string;
    description: string;
    title: string;
};


export const codeService = {
    async getCodes(token: string) {
        const url = `/codes`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async postCode(
        token: string,
        code: Code
    ) {
        const url = `/codes`;
        const response = await axios.post(url, { data: code }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    }
};     