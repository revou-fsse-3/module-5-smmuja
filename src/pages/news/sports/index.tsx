// import API_URL_BUSINESS from '../../api/getBusiness'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import { Card } from "../../../components";
import styles from './../News.module.css'
// import {useQuery } from 'react-query';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';

interface Sports {
    children: ReactNode;
    articles: any;
    // map(arg0: (article: any) => import("react").JSX.Element): import("react").ReactNode;
    id: number;
    author: string;
    title : string;
    description: string;
    urlToImage: string;
}
interface SportsProps {
    children: ReactNode;
    articles : Sports;
}

export const getServerSideProps  =  ( async () => {
    const fetch = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0bc00825346244b3a4b28c881462f279')
    // const fetch = await axios.get('API_URL_BUSINESS')
    const data: Sports = fetch.data
    
    return {
        props: {
            articles: data
        }
    }
})

const Sports = ({articles} : SportsProps) => {

    return ( 
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            {articles?.articles?.map((article: { id: Key | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; urlToImage: string | undefined; }) => (
                <Card key={article.id}>

                    <Card padding={15}>

                        <p>{article.author}</p>
                        <h2 className="font-bold">{article.title}</h2>
                        <p>{article.description}</p>
                        <img src={article.urlToImage}></img>
                        {/* <img>{article.urlToImage}</img> */}
                    </Card>
                </Card>
            ))}
        </div>
    </div>
    )
};


export default Sports;