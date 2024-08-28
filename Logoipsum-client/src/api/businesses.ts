import AxiosInstance from "./axiosInstance";
import { Business, BusinessesResponse, BusinessResponse } from "../types/business";

export const fetchBusinesses = async (): Promise<BusinessesResponse> => {
    const response = await AxiosInstance.get("/businesses")
    return { businesses: response.data.businesses }
}
export const fetchBusinessesById = async (): Promise<BusinessResponse> => {
    const response = await AxiosInstance.get("/businesses/:id")
    return { businesses: response.data.businesses }
}