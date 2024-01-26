// import NavItem from "./NavItem"
// import Link from "next/link"
// import styles from "./Navbar.module.css"
// import { useRouter } from "next/router"
// import { MouseEventHandler, useEffect } from "react"
// import { Button } from "@/components"
// import { ButtonHTMLAttributes } from "react"

// // interface Props extends MouseEventHandler<HTMLButtonElement> {
// //     label: string,
// //     onClick?: string;
// // }

// const LoginLogout = () => {

//     const route = useRouter();
//     const token = global?.localStorage?.getItem('token');

//     const handleLogout = () => {
//         route.push('/auth/login');
//         global?.localStorage?.removeItem('token');
//     }

//     useEffect(() => {
//         if(!token) {
//             return (
//                 <div className={styles.navItemStyle}>
//                 <NavItem title="Login" href='/auth/login' />
//                 <NavItem title="Subscribe" href='/auth/subscribe' />
//             </div>
//             )
//         };

//         return (
//             <div className={styles.navItemStyle}>
//                 {/* <NavItem title='Logout' onClick={handleLogout}/> */}
//                 {/* <Button onClick={handleLogout}>Logout</Button> */}
//                 {/* <Button onClick={handleLogout} label={'Logout'} type='submit' className='bg-gray-500' /> */}
//                 <button onClick={handleLogout}>
//                     Logout
//                 </button>
//             </div>
//         )
//     })

//     return 
// }

// export default LoginLogout

