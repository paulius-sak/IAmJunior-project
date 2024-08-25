import AxiosInstance from "./axiosInstance";
import { Business } from "../types/business";

export const fetchBusinesses = async (): Promise<Business> => {
    const response = await AxiosInstance.get("/categories")
    return response.data
}