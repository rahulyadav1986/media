
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './style.module.scss'
import {HeadingLink} from '@/components/shared/headingLink/headingLink';
import { useEffect, useState } from 'react';
import { MovieSkeletonCard, tvSkeletonCard } from '@/components/shared/skeletons/skeletons';
import Carousel from "react-elastic-carousel";
import TvItem from '../tvItem/tvItem';
const TvTrending = ({tvPopularData})=>{
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
            <div className={`${styles.popular_wrapper}`}>
                <MainContainer>
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink 
                                mainTitle="Popular tvs" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched tvs by days"
                                src={`/tv/trending`}
                                buttonText="View All" 
                            />
                        </div>
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            <Carousel breakPoints={breakPoints}>
                                {
                                    tvPopularData.results.slice(4,14).map((item,i)=>{                                        
                                        return(
                                            !loading ? <MovieSkeletonCard /> : <TvItem key={i} item = {item} />
                                            
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

export default TvTrending;