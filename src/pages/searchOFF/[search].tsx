import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import AllMovie, { AllMovieProps } from "@/libs/imdb/AllMovie";
// import SearchMovie from "@/libs/imdb/SearchMovie";
import AllNews, { AllNewsProps } from "../api/getAllNews"
import getSearch from '../api/getSearch'
// import CardsWrapper from "@components/Card/CardList";
import Card from '../../components/Card'
import styles from "../news/News.module.css"


interface SearchProps {
    news: AllNewsProps;
    }

export const getServerSideProps: GetServerSideProps<SearchProps> = async (
    context
    ) => {
    const search = context.params!["search"] as string;
    try {
        const request = await getSearch(search || "");
        return {
        props: {
            news: request,
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

    export default function Search({ news }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>

                {news?.map((news) => (
                    <Card key={news.id}>
                        <Card padding={15}>

                            <p>{news.author}</p>
                            <h2 className="font-bold">{news.title}</h2>

                        </Card>

                    </Card>
                ))}

            </div>
            {/* <Card>{news.results}</Card> */}
        {/* <CardsWrapper resultArr={news.results} /> */}
        </div>
    );
}



// const Search = () => {

//     return (
//         <div>'Ini search</div>
//     )
// }

// export default Search