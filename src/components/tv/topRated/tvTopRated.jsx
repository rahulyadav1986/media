
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './style.module.scss'
import {HeadingLink} from '@/components/shared/headingLink/headingLink';
import { useEffect, useState } from 'react';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import Carousel from "react-elastic-carousel";
import TvItem from '../tvItem/tvItem';
const  TvTopRated = ({TvTopRatedData})=>{
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
                                    TvTopRatedData.results.slice(0,10).map((item,i)=>{
                                        const ratingava = ()=>{
                                            return(
                                                item.vote_average * 10
                                            )
                                        }
                                        return(
                                            !loading ? <MovieSkeletonCard /> : <TvItem key={i} item = {item} />
                                           
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Top Rated tvs" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched tvs by days"
                                src={`/tv/top-rated`}
                                buttonText="View All" 
                            />
                        </div>
                    </div>
                </MainContainer>
                
            </div>
        </>
    )
}

export default TvTopRated;