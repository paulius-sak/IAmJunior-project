import AxiosInstance from "./axiosInstance";
import { Business, BusinessesResponse, BusinessResponse } from "../types/business";

export const fetchBusinesses = async (): Promise<BusinessesResponse> => {
    const response = await AxiosInstance.get("/businesses")
    return { businesses: response.data.businesses }
}
export const fetchBusinessesById = async (id: string): Promise<BusinessResponse> => {
    const response = await AxiosInstance.get(`/businesses/${id}`)
    return { business: response.data.business }
}


export const fetchSimilarBusinesses = async (category: string): Promise<BusinessesResponse> => {
    const response = await AxiosInstance.get(`/businesses/category/${category}`);
    return { businesses: response.data.businesses };
};