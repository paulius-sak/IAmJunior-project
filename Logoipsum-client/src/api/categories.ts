import AxiosInstance from "./axiosInstance";
import { Category, NewCategory, CategoriesResponse } from "../types/categories";

export const fetchCategories = async (): Promise<CategoriesResponse> => {
    const response = await AxiosInstance.get("/categories")
    return response.data
}

export const createCategories = async (category: NewCategory): Promise<Category> => {
    const response = await AxiosInstance.post("/categories", category)
    return response.data
}