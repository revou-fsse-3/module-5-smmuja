
import baseApi from "./baseApi";

const API_URL_HEALTH = 'top-headlines?country=us&category=health&apiKey=0bc00825346244b3a4b28c881462f279';

export interface Health {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface HealthResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: Health [];
}

export const getHealth = async () => {
    return await baseApi.get<HealthResult>(API_URL_HEALTH).then((data) => data.data)
}