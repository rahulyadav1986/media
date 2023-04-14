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
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Popular Movies</Link></li>  
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Latest Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Top Rated Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Now Playing Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Upcoming Movies</Link></li>                                     
                                </ul>
                            </div>
                            <div className={styles.details}>
                                <h3>TV Shows</h3>
                                <ul className={`${styles.footer_menu}`}>
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Popular Movies</Link></li>  
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Latest Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Top Rated Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Now Playing Movies</Link></li> 
                                    <li><Link href="" className="d-flex align-items-center"><Image src="/images/btn_arrow.png" fill={true} alt="icon" /> Upcoming Movies</Link></li>                                     
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