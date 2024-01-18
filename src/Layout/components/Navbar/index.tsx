import styles from './Navbar.module.css';
import { FC, HTMLAttributes, PropsWithChildren} from "react";
import NavItem from "./NavItem";
import SearchBar from '../SearchBar';
import Link from 'next/link';

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {}

type NavBarComponents = FC<NavBarProps> & PropsWithChildren;

const NavBar : NavBarComponents = ({ children, ...resProps}) => {
    return (
        <div>
            <nav className={styles.nav}>

            <div>
                    <Link   href={'/'}>
                        ABC NEWS
                    </Link>
                </div>

                <div >

                    <ul className={styles.navItemStyle}>

                        {/* <NavItem title="Home" href="/"/> */}
                        <NavItem title="Sports" href="/news/sports"/>
                        <NavItem title="Health" href="/news/health"/>
                        <NavItem title="Entertainment" href="/news/entertainment"/>
                        <NavItem title="Business" href="/news/business"/>
                        <NavItem title="Tech" href="/news/tech"/>
            
                    </ul>
            
                </div>

                <div>
                    <SearchBar />
                </div>

                <div className={styles.navItemStyle}>
                    <NavItem title="Login" href='/auth/login' />
                    <NavItem title="Subscribe" href='/auth/subscribe' />
                </div>
            </nav>

        </div>


        // <div 
        // {...resProps}
        // className={
        //     "flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4" +
        //     ` ${resProps.className ? resProps.className : ""}`
        // }
        // >
        //     <NavItem title="Home" href="/"/>
        //     <NavItem title="Business" href="/news/business"/>
        //     <NavItem title="Tech" href="/news/tech"/>

        // </div>
    )
}

export default NavBar