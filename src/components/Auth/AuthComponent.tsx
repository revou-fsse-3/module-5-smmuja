"use client";

// import { isAuthenticated } from "@/utils/Auth";
// import { redirect } from "next/navigation";
import { useRouter } from "next/router";
// import { Component } from "react";
import { useEffect } from "react";


export default function AuthComponent (Component: any) {
    return function AuthComponent(props: any) {
        // const isAuth = isAuthenticated;
        const route = useRouter();
        const token = global?.localStorage?.getItem('token');

        useEffect(() => {

            // if(!isAuth) {
            if(!token) {
                // redirect('/auth/login')
                route.push('/auth/login')
                // return redirect('/auth/login')
            }
        }, []);

        if (!token) {
            return null;
        }
    
    
        return (
            <Component {...props} />
        );
    };

}



