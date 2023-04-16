import Link from 'next/link';
import styles from './style.module.scss';
import { useState } from 'react';
import { SubItem1, SubItem2 } from './subItem';
const Menu = ()=>{
    const [submenu1, setSubMenu1] = useState(false);
    const [submenu2, setSubMenu2] = useState(false);
    const togglemenu1 = ()=>{
        setSubMenu1(!submenu1)
        setSubMenu2(false)
    }
    const togglemenu2 = ()=>{
        setSubMenu2(!submenu2)
        setSubMenu1(false)
    }
    return(
        <>
            <ul className={`${styles.menu_wrapper} d-flex align-items-center`}>
                <li onClick={togglemenu1}>
                    Movies
                    {
                        submenu1 && <SubItem1 />   
                    }                    

                </li>
                <li onClick={togglemenu2}>
                    TV Shows
                    {
                        submenu2 && <SubItem2 />   
                    } 
                </li>
            </ul>
        </>
    )
}

export default Menu;