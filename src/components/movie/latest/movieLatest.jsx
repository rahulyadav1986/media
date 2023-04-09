import HeadingLink from "@/components/shared/headingLink/headingLink";
import MainContainer from "@/components/shared/mainContainer/mainContainer";
import styles from './style.module.scss'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Moment from "react-moment";
import { enviourment } from 'next.config';
const MovieLatest = ({HeroData})=>{
    const [tab, setTab] = useState(0);
    return(
        <>
            <div className={`${styles.latest_movie_wrapper} ptLarge`}>
                <MainContainer>
                    <div className={`${styles.main_area} d-flex justify-content-between`}>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Latest Movies" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched movies by days"
                                src="/movie/latest"
                                buttonText="View All" 
                            />
                        </div>
                        <div className={`${styles.details_tab_section_area} d-flex justify-content-between`}>
                            <div>
                                {
                                    HeroData.results.slice(5,15).map((item,i)=>{
                                        return(
                                            <>
                                                <div key={i} className={`${styles.tab_content_area} ${tab === i ? `${styles.active}` : "" } d-flex justify-content-between`}>
                                                    <div className={styles.image_area}>
                                                        <Image src={`${enviourment.image_base_url}/w500${item.poster_path}`} fill={true} alt={item.title} />
                                                    </div>
                                                    <div className={styles.content_area}>
                                                        <h3>{item.title}</h3>
                                                        <p>{`${item.overview.substring(0,125)}...`}</p>
                                                        <ul className={`${styles.widget} widget d-flex justify-content-between`}>
                                                            <li className='d-flex align-items-center'><Image src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                                                            <li className='d-flex align-items-center'><Image alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                                                            <li className="d-flex align-items-center"><Image alt="icon" src="/images/date.png" fill={true} />
                                                                <Moment format="Do, MMMM YYYY">
                                                                    {item.release_date}
                                                                </Moment>
                                                            </li>
                                                        </ul>
                                                        <Link href="/" className={`${styles.global_button} global_button`}>
                                                            <Image alt="icon" src="/images/play.png" fill={true} />
                                                            watch now
                                                        </Link>
                                                    </div>
                                                </div> 
                                            </>
                                        )
                                    })
                                }
                                                              
                            </div>
                            
                            <ul className={`${styles.tabs_list_area} scroll_area height`}>
                                {
                                    HeroData.results.slice(5,15).map((item,i)=>{
                                        return(
                                            <>
                                                <li key={i} onClick={()=> setTab(i)} className={tab === i ? `${styles.active}` : ""}>
                                                    <Image src={`${enviourment.image_base_url}/w300${item.backdrop_path}`} fill={true} alt="demo" />
                                                </li>
                                            </>
                                        )
                                    })
                                }
                               
                               
                            </ul>
                        </div>
                    </div>
                </MainContainer>
            </div>
        </>
    )
}

export default MovieLatest;