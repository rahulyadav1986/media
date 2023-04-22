import Image from "next/image";
import MainContainer from "../mainContainer/mainContainer";
import styles from "./style.module.scss"
import Link from "next/link";
const Footer = ()=>{
    return(
        <>
            <div className={styles.footer_container_wrapper}>
                <MainContainer>
                    <div className={`${styles.details_wrap} d-flex justify-content-center`}>
                        <div className={styles.log_area}>
                            <Image src="/images/logo.png" fill={true} alt="Media" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam quas quasi voluptate, ratione voluptatibus! Accusamus optio officia tempora placeat.</p>
                        </div>
                        <div className={`${styles.menu_area} d-flex`}>
                            <div className={styles.details}>
                                <h3>Movies</h3>
                                <ul className={`${styles.footer_menu}`}>
                                    <li><Link href="/movie/trending" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Trending Movies</Link></li>
                                    <li><Link href="/movie/popular" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Popular Movies</Link></li>  
                                    <li><Link href="/movie/top-rated" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Top Rated Movies</Link></li> 
                                    <li><Link href="/movie/now-playing" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Now Playing Movies</Link></li> 
                                    <li><Link href="/movie/upcoming" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Upcoming Movies</Link></li>                                     
                                </ul>
                            </div>
                            <div className={styles.details}>
                                <h3>TV Shows</h3>
                                <ul className={`${styles.footer_menu}`}>
                                    <li><Link href="/tv/trending" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Trending Tv Shows</Link></li>  
                                    <li><Link href="/tv/popular" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Popular Tv Shows</Link></li> 
                                    <li><Link href="/tv/airing-today" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Airing Today Tv Shows</Link></li> 
                                    <li><Link href="/tv/on-air" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> On The Air Tv Shows</Link></li> 
                                    <li><Link href="/tv/top-rated" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Top Rated Tv Shows</Link></li>                                     
                                </ul>
                            </div>
                            <div className={styles.details}>
                                <h3>Popular People</h3>
                                <ul className={`${styles.footer_menu}`}>
                                    <li><Link href="/movie/person" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" />Movie</Link></li>  
                                    <li><Link href="/tv/person" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Tv</Link></li>                          
                                </ul>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </MainContainer>
                <div className={styles.copy_write_area}>
                    <MainContainer>
                        <p className={styles.text_center}>© 2021-2023 by Media.in, Inc.</p>
                    </MainContainer>
                </div>
            </div>
            
        </>
    )
}

export default Footer;