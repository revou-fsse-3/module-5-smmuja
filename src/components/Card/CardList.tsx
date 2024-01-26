import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Result } from "../../pages/api/getAllNews"
import Card from "./index";

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
    resultArr: Result[];
    }
    
interface newsProps extends HTMLAttributes<HTMLDivElement> {
    news: Result;
    resultArr: Result[];
}
    
    type CardsComponents = FC<CardsProps> & PropsWithChildren;
    type newsComponents = FC<newsProps> & PropsWithChildren;

    const Cards: CardsComponents & newsComponents = ({ resultArr, ...resProps }) => {
    return (
        <div
        {...resProps}
        className={
            "sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1800px] mx-auto py-4" +
            ` ${resProps.className ? resProps.className : ""}`
        }
        >
        {resultArr.map((result, id) => (
            <Card news={result} key={id} />
        ))}
        </div>
    );
};

export default Cards;
