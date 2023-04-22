import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import { HeadingLink } from '@/components/shared/headingLink/headingLink';
const TvNowPlaying = ({tvPopularData})=>{
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
            <div className={`${styles.now_playing_wrapper} ptLarge`}>
                <MainContainer>
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>
                        <div className={`${styles.heading_area} heading_area`}>
                            <HeadingLink
                                mainTitle="Now Playing tvs" 
                                extraText="to" 
                                highlightedTtile="Watch Now"
                                descriptionText="Most watched tvs by days"
                                src={`/tv/now-playing`}
                                buttonText="View All" 
                            />
                        </div>
                        <div className={`${styles.details_area} d-flex scroll_area`}>
                            <Carousel breakPoints={breakPoints}>
                                {
                                    tvPopularData.results.slice(1,10).map((item,i)=>{
                                        return(
                                            !loading ? <tvSkeletonCard /> : <tvItem key={i} item = {item} />
                                            
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

export default TvNowPlaying;