
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './style.module.scss'

import Image from 'next/image';
import Link from 'next/link';
import { enviourment } from 'next.config';
import CircleRating from '@/components/shared/circleRating/circleRating';
import { useEffect, useState } from 'react';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import Carousel from "react-elastic-carousel";
import { HeadingLink } from '@/components/shared/headingLink/headingLink';
const MovieNowPlaying = ({MoviePopularData})=>{
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
            <div className={`${styles.now_playing_wrapper} ptLarge`}>
                <MainContainer>
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink
                                mainTitle="Now Playing Movies" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched movies by days"
                                src="/movie/popular"
                                buttonText="View All" 
                            />
                        </div>
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            <Carousel breakPoints={breakPoints}>
                                {
                                    MoviePopularData.results.slice(1,10).map((item,i)=>{
                                        const ratingava = ()=>{
                                            return(
                                                item.vote_average * 10
                                            )
                                        }
                                        return(
                                            !loading ? <MovieSkeletonCard /> :
                                            <div key={i} className={`${styles.card_wrapper} card_wrapper`}>
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
                                                    <li className='star d-flex align-items-center'><Image src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                                                    <li className='d-flex align-items-center'><Image alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </MainContainer>
                
            </div>
        </>
    )
}

export default MovieNowPlaying;