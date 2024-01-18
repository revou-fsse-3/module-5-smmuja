
import baseApi from "./baseApi";

const API_URL_ENTERTAINMENT = 'top-headlines?country=us&category=entertainment&apiKey=0bc00825346244b3a4b28c881462f279';

export interface Entertainment {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface EntertainmentResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: Entertainment [];
}

export const getEntertainment = async () => {
    return await baseApi.get<EntertainmentResult>(API_URL_ENTERTAINMENT).then((data) => data.data)
}