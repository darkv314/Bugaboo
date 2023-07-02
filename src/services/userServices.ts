import { AxiosResponse } from 'axios';
import axios from "@/api/axios";
import { UserGet } from "@/models/user";

export const userService = {
    async getUser(id: string, token: string): Promise<UserGet> {
        const url = `/users/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                'populate': '*',
            }
        });

        return response.data;
    },
};     