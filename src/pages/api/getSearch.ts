// import { SlControlStart } from "react-icons/sl";
import baseApi, { apiConfig,  } from "./baseApi";
import { AllNewsProps } from "../api/getAllNews"

export default async function getAllnews(
    searchNews: string
    ): Promise<AllNewsProps> {

    const req = await fetch(baseApi + "/search/news?query=" + "irons", apiConfig);

    const response = (await req.json()) as unknown;

    if (!req.ok) {
        console.log(searchNews);
        throw Error("failed to fetch  treading news ");
    }

    return response as AllNewsProps;
}
