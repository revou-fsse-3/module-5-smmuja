import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
}

const Button = ({label, ...props} : Props) => {

    return (
        <button {...props} className={`${props.className} m-1 rounded-md  bg-slate-100 text-black px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>{label}</button>
    )
}

export default Button;