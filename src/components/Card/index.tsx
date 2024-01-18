
import { ReactNode, useMemo } from "react"
// import styles from './Card.module.css';


interface Props {
    children: ReactNode;
    padding?: number;
}

const Card = ({children, padding} : Props) => {

    const paddingStyle = useMemo (
        () => ({
            'padding' : `${padding}px`
        }),
        [padding]
    )

    return (

        <div style={paddingStyle}>
            {children}
        </div>
        // <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1800px] mx-auto py-4' style={paddingStyle}>
        //     {children}
        // </div>

    )
}

export default Card