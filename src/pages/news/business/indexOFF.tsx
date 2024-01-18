import { getBusiness, Business, BusinessResult } from '../../api/getBusiness'
import { Card } from "../../../components";
import styles from '../../Home/Home.module.css'
// import {useQuery } from 'react-query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface BusinessProps {
    data: Business;
    articles : BusinessResult;
}

export const getServerSideProps = async (
    context: { query: { [x: string]: string; }; }
    ) => {
        const article = context.query["article"] as string;
        try {
        // const request = await getBusiness(article || "");
        const request = await getBusiness();
        return {
            props: {
            articles: request,
            },
        };
        } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw Error("failed to fetch all data");
        }
    };

    type Props = InferGetServerSidePropsType<typeof getServerSideProps>;


const Business = ({articles} : Props) => {

    // const  {data} = useQuery('getBusiness', getBusiness);
    // console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {articles?.articles.map((article) => (
                    <Card key={article.id}>

                        <Card padding={15}>

                            <p>{article.author}</p>
                            <h2 className="font-bold">{article.title}</h2>
                            <p>{article.description}</p>
                            <img src={article.urlToImage}></img>
                            {/* <img>{article.urlToImage}</img> */}


                        </Card>

                    </Card>
                ))
                }
            </div>

        </div>
    )
}

export default Business;