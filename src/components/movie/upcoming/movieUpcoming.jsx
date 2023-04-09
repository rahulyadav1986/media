import styles from './style.module.scss'
import HeadingLink from '@/components/shared/headingLink/headingLink';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import Link from 'next/link';
import Image from 'next/image';
import { enviourment } from 'next.config';
import 'react-circular-progressbar/dist/styles.css';
import CircleRating from '@/components/shared/circleRating/circleRating';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import { useEffect, useState } from 'react';
const MovieUpcoming = ({MovieUpcomingData})=>{
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    return(
        <>
            <div className={`${styles.upcoming_wrapper} ptLarge`}>
                <MainContainer>
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>                        
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            {
                                MovieUpcomingData.results.slice(4,14).map((item,i)=>{
                                    const ratingava = ()=>{
                                        return(
                                            item.vote_average * 10
                                        )
                                    }
                                    return(
                                        !loading ? <MovieSkeletonCard /> :
                                        <div className="card_wrapper">
                                            <div className="image_wrapper">
                                                <Link href=""><Image src={`${enviourment.image_base_url}/w300${item.poster_path}`} fill={true} alt="" /></Link> 
                                                <div className="circle_rating">
                                                    <CircleRating
                                                        rating={Math.floor(ratingava().toFixed(1))}
                                                    />
                                                </div>                                              
                                                
                                            </div>
                                            <Link href=""><h3>{item.title}</h3></Link>
                                            <ul className="widget d-flex justify-content-between">
                                                <li className='d-flex align-items-center'><Image src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                                                <li className='d-flex align-items-center'><Image alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Upcoming Movies" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched movies by days"
                                src="/movie/upcoming"
                                buttonText="View All" 
                            />
                        </div>
                    </div>
                    
                    
                </MainContainer>
                
            </div>
        </>
    )
}

export default MovieUpcoming;