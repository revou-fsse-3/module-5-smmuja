import { FC, HTMLAttributes, PropsWithChildren} from "react";
import Navbar from "./components/Navbar"


interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

type LayoutComponents = FC<LayoutProps> & PropsWithChildren;

const Layout: LayoutComponents = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>

    );
};

export default Layout