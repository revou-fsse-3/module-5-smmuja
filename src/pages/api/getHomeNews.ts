
import baseApi from "./baseApi";

const API_URL_NEWS = 'top-headlines?sources=bbc-news&apiKey=0bc00825346244b3a4b28c881462f279';

export interface News {
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}

export interface NewsResult {
    page: number;
    pageSize: number;
    status: string;
    totalResults: number;
    articles: News [];
}

export const getNews = async () => {
    return await baseApi.get<NewsResult>(API_URL_NEWS).then((data) => data.data)
}