"use client";
import { FC, FormEvent, HTMLAttributes, PropsWithChildren } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchProps extends HTMLAttributes<HTMLDivElement> {}

type SearchComponents = FC<SearchProps> & PropsWithChildren;

const SearchBar: SearchComponents = ({}) => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
    return (
        <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-0"
        >
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search news..."
            className="bg-slate-100 text-white rounded-bl-xl rounded-tl-xl"
        />
        <button
            disabled={!search}
            type="submit"
            className="p-1 bg-slate-100 text-black rounded-br-xl rounded-tr-xl
            disabled:text-gray-400"
        >
            Search
        </button>
        </form>
    );
};

export default SearchBar;
