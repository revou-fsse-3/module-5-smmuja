// nitip
// let title = "Red Sea attacks halt Tesla production Germany"
// console.log((title.split(' ')).join('-').toLowerCase())
// red-sea-attacks-halt-tesla-production-germany

import axios from "axios";
// import { config } from "localforage";

export const ACCESS_TOKEN = process.env.API_KEY;

// export const apiConfig = (config: any) => {
// export const apiConfig = () => {

//     config.headers = {
//         'Authorization': '0bc00825346244b3a4b28c881462f279',
//         'Accept' : 'application/json'

//     }
//     return config;
// }

export const apiConfig = {

    method: "GET",

    headers : {
        Authorization: '0bc00825346244b3a4b28c881462f279',
        Accept : 'application/json'

    },
};

const baseApi = axios.create ({
    baseURL : 'https://newsapi.org/v2/',
    timeout: 90_000

})

// baseApi.interceptors.request.use(apiConfig)

export default baseApi