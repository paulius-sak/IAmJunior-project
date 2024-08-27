
import AxiosInstance from "./axiosInstance";

export const fetchUsers = async () => {
    const response = await AxiosInstance.get("/users")
    return response.data
}


export const FetchLoginUser = async (email: string, password: string) => {
    const response = await AxiosInstance.post("/users/login", { email, password });
    return response.data;
}