import styles from './style.module.scss'
import {HeadingLink} from '@/components/shared/headingLink/headingLink';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import Link from 'next/link';
import Image from 'next/image';
import { enviourment } from 'next.config';
import 'react-circular-progressbar/dist/styles.css';
import CircleRating from '@/components/shared/circleRating/circleRating';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
const MovieUpcoming = ({MovieUpcomingData})=>{
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        <>
            <div className={`${styles.upcoming_wrapper} ptLarge`}>
                <MainContainer>                    
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>                        
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            <Carousel breakPoints={breakPoints}>
                                {
                                    MovieUpcomingData.results.slice(4,14).map((item,i)=>{
                                        const ratingava = ()=>{
                                            return(
                                                item.vote_average * 10
                                            )
                                        }
                                        return(
                                            !loading ? <MovieSkeletonCard /> :
                                            <div key={i} className={`${styles.card_wrapper} card_wrapper`}>
                                                <div className="image_wrapper">
                                                    <Link href={`/movie/${item.id}`}><Image loading="lazy" src={`${enviourment.image_base_url}/w300${item.poster_path}`} fill={true} alt="" /></Link> 
                                                    <div className="circle_rating">
                                                        <CircleRating
                                                            rating={Math.floor(ratingava().toFixed(1))}
                                                        />
                                                    </div> 
                                                </div>
                                                <Link href=""><h3>{item.title}</h3></Link>
                                                <ul className="widget d-flex justify-content-between">
                                                    <li className='d-flex align-items-center'><Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                                                    <li className='d-flex align-items-center'><Image loading="lazy" alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>                            
                        </div>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Upcoming Movies" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched movies by days"
                                src={`/movie/popular`}
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