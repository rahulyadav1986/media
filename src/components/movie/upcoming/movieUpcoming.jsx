import styles from './style.module.scss'
import {HeadingLink} from '@/components/shared/headingLink/headingLink';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import Link from 'next/link';
import Image from 'next/image';
import { env } from 'next.config';
import 'react-circular-progressbar/dist/styles.css';
import CircleRating from '@/components/shared/circleRating/circleRating';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import MovieItem from '../movieItem/movieItem';
const MovieUpcoming = ({MovieUpcomingData})=>{
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
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
                                        return(
                                            !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
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
                                src={`/movie/upcoming`}
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