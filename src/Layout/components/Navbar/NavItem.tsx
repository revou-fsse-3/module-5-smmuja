"use client";

import Link from "next/link";
// import {useSearchParams} from "next/navigation";
import { FC, HTMLAttributes, PropsWithChildren} from "react";


interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    // param: string;
    href: string;
}

type NavItemComponents = FC<NavItemProps> & PropsWithChildren;

const NavItem : NavItemComponents = ({
    children,
    title,
    href,
    // param,
    ...resProps
}) => {
    // const searchParams = useSearchParams();
    // const business = searchParams.get("business")
    return (
        <div 
        {...resProps}
        className={`${resProps.className ? resProps.className : ""}`}
        >
            <Link 
            className={`m-4 hover hover:text-amber-600 font-semibold p-2 ${
                //genre &&
                //genre === param &&
                "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
            }`}
            // href={`/?genre=${param}`}
            href={`${href}`}
            >
                {title}
            </Link>

        </div>
    );
};

export default NavItem;