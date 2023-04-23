
import Link from 'next/link';
import styles from './style.module.scss';
const SubItem1 = () =>{
    return (
        <>
            <ul className={`${styles.submenu}`}>
                <li>
                    <Link href="/movie/trending">Trending</Link>
                </li>
                <li>
                    <Link href="/movie/popular">Popular</Link>
                </li>
                <li>
                    <Link href="/movie/upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link href="/movie/top-rated">Top Rated</Link>
                </li>
                <li>
                    <Link href="/movie/now-playing">Now Playing</Link>
                </li>                      
            </ul>
        </>
    )
}
const SubItem2 = () =>{
    return (
        <>
            <ul className={`${styles.submenu}`}>
                <li>
                    <Link href="/tv/trending">Trending</Link>
                </li>
                <li>
                    <Link href="/tv/popular">Popular</Link>
                </li>
                <li>
                    <Link href="/tv/airing-today">Airing Today</Link>
                </li>
                <li>
                    <Link href="/tv/on-air">On The Air</Link>
                </li>
                <li>
                    <Link href="/tv/top-rated">Top rated</Link>
                </li>                      
            </ul>
        </>
    )
}
const SubItem3 = () =>{
    return (
        <>
            <ul className={`${styles.submenu}`}>
                <li>
                    <Link href="/movie/person">Movie</Link>
                </li>
                <li>
                    <Link href="/tv/person">Tv</Link>
                </li>       
            </ul>
        </>
    )
}

export {SubItem1, SubItem2, SubItem3}