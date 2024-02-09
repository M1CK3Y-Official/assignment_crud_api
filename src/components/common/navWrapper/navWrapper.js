'use client';
import Link from 'next/link';
import styles from './navWrapper.module.css';
import { usePathname } from 'next/navigation'
const NavWrapper = ({children, theme, title, navData = []}) => {

    const pathname = usePathname()
    let themeClass = styles[`theme-${theme}`];

    return (
        <div className={`${styles.wrapper} ${themeClass}`}>

            <h5>{title}</h5>
        
            {navData.map((item, index) => {

                let activeClass = pathname === item.url ? styles.active : '';
                return (
                    <Link key={index} href={item.url} className={activeClass}>{item.title}</Link> 
                )   
                }) 
            }

            {children}
        </div>
    )
};
export default NavWrapper