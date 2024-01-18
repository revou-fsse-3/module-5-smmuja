
import baseApi from "./baseApi";

export const API_URL_BUSINESS = 'top-headlines?country=us&category=business&apiKey=0bc00825346244b3a4b28c881462f279';

export interface Business {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface BusinessResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: Business [];
}

export const getBusiness = async () => {
    return await baseApi.get<BusinessResult>(API_URL_BUSINESS).then((data) => data.data)
}