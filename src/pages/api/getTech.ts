
import baseApi from "./baseApi";

const API_URL_TECH = 'top-headlines?country=us&category=technology&apiKey=0bc00825346244b3a4b28c881462f279';

export interface Tech {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface TechResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: Tech [];
}

export const getTech = async () => {
    return await baseApi.get<TechResult>(API_URL_TECH).then((data) => data.data)
}