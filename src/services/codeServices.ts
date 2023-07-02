import axios from "@/api/axios";
import { Code, PostCode } from "@/models/code";
import { AxiosResponse } from "axios";

export const codeService = {
    async getCodes(token: string) {
        const url = `/codes?populate=*`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async postCode(token: string, code: PostCode) {
        const url = `/codes`;
        const response = await axios.post(
            url,
            { data: code },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async putCode(token: string, code: PostCode, idUser: number) {
        const url = `/codes/${idUser}`;
        const response = await axios.put(
            url,
            { data: code },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async deleteCode(token: string, code: Code) {
        const url = `/codes/${code.id}`;
        const response = await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async getCode(token: string, id: number) {
        const url = `/codes/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                'populate[comments][populate][0]': "users_permissions_user",
                'populate[users_permissions_user][populate][0]': '*',
                'populate[downvotes][populate][0]': "downvotes",
                'populate[upvotes][populate][0]': "upvotes",

            },
        });
        return response.data;
    },
};
