import Link from 'next/link';
import styles from './style.module.scss';
const Menu = ()=>{
    return(
        <>
            <ul className={`${styles.menu_wrapper} d-flex align-items-center`}>
                <li><Link href="/movie/popular">Movies</Link></li>
                <li>TV Shows</li>
            </ul>
        </>
    )
}

export default Menu;