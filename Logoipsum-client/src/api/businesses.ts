import AxiosInstance from "./axiosInstance";
import { Business, BusinessesResponse } from "../types/business";

export const fetchBusinesses = async (): Promise<BusinessesResponse> => {
    const response = await AxiosInstance.get("/businesses")
    return { businesses: response.data.businesses }
}