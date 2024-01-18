
import baseApi from "./baseApi";

const API_URL_PREMIUM = 'top-headlines?country=us&category=general&apiKey=0bc00825346244b3a4b28c881462f279';

export interface Premium {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface PremiumResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: Premium [];
}

export const getPremium = async () => {
    return await baseApi.get<PremiumResult>(API_URL_PREMIUM).then((data) => data.data)
}