import Image from "next/image";
import styles from './style.module.scss';
import MainContainer from "../shared/mainContainer/mainContainer";
import Link from "next/link";
import { enviourment } from 'next.config';
import { useEffect, useState } from "react";
import { HeroSkeleton, HeroSkeletonCard } from "../shared/skeletons/skeletons";
import Moment from 'react-moment';
const Hero = ({HeroData})=>{
    const [tab, setTab] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    
    return(
        <>
            <div className={`${styles.hero_wrapper} hero_wrapper`}>
                {
                    HeroData?.results.map((item,i)=>{
                        return(
                            !loading ? <HeroSkeleton />:
                            <div key={i} className={`${styles.main_hero_item} ${tab === i ? `${styles.active}`: ``}`}>
                                <Image loading="lazy" alt={item.title} className={styles.avator} src={`${enviourment.image_base_url}/original${item.backdrop_path}`}  fill={true} />
                                <div className={`${styles.content_area} d-flex flex-column`}>
                                    <MainContainer>
                                        <h2>{item.title}</h2>
                                        <p>{`${item.overview.substring(0,125)}...`}</p>
                                        <ul className={`${styles.widget_area} d-flex align-items-center`}>
                                            <li>
                                                <div className={styles.rating}>IMDb {item.vote_average}</div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <Image loading="lazy" alt="icon" className={styles.icon} src="/images/like.png" fill={true} /> {item.vote_count}
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <Image loading="lazy" alt="icon" className={styles.icon} src="/images/date.png" fill={true} />
                                                <Moment format="Do, MMMM YYYY">
                                                    {item.release_date}
                                                </Moment>
                                                 
                                            </li>
                                        </ul>
                                        <Link href="/" className={`${styles.global_button} global_button`}>
                                            <Image loading="lazy" alt="icon" src="/images/play.png" fill={true} />
                                            watch now
                                        </Link>
                                    </MainContainer>
                                </div>
                            </div>
                            
                        )
                    })
                } 
                <div className={`${styles.hero_tab_area}`}>
                    <MainContainer>
                        {
                            !loading ? <HeroSkeletonCard /> :
                            <ul className={`${styles.tabs} d-flex`}>
                                {
                                    HeroData.results.slice(0,4).map((item,i)=>{
                                        return(
                                            <li key={i} onClick={() => setTab(i)} className={tab === i ? `${styles.active}`: ""}>
                                                <Image loading="lazy" alt={item.title} src={`${enviourment.image_base_url}/w300${item.poster_path}`} fill={true} />
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        }
                        
                    </MainContainer>
                </div>
            </div>
        </>
    )
}

export default Hero;