
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './style.module.scss'
import {HeadingLink} from '@/components/shared/headingLink/headingLink';
import Image from 'next/image';
import Link from 'next/link';
import { env } from 'next.config';
import CircleRating from '@/components/shared/circleRating/circleRating';
import { useEffect, useState } from 'react';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import Carousel from "react-elastic-carousel";
import MovieItem from '../movieItem/movieItem';
const MovieTopRated = ({MovieTopRatedData})=>{
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
            <div className={`${styles.top_rated_wrapper} ptLarge pbLarge`}>
                <MainContainer>
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>                        
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            <Carousel breakPoints={breakPoints}>
                                {
                                    MovieTopRatedData.results.slice(0,10).map((item,i)=>{
                                        const ratingava = ()=>{
                                            return(
                                                item.vote_average * 10
                                            )
                                        }
                                        return(
                                            !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
                                           
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Top Rated Movies" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched movies by days"
                                src={`/movie/top-rated`}
                                buttonText="View All" 
                            />
                        </div>
                    </div>
                </MainContainer>
                
            </div>
        </>
    )
}

export default MovieTopRated;