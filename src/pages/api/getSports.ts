
import baseApi from "./baseApi";

const API_URL_SPORTS = 'top-headlines?country=us&category=sports&apiKey=0bc00825346244b3a4b28c881462f279';

export interface sports {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface SportsResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: sports [];
}

export const getSports = async () => {
    return await baseApi.get<SportsResult>(API_URL_SPORTS).then((data) => data.data)
}