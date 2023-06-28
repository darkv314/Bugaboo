import axios from "@/api/axios";

export const userService = {
    async getUser(id: string) {
        const url = `/users/${id}`;
        const response = await axios.get(url);
        return response.data;
    },
};     