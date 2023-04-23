import styles from './style.module.scss'
import 'react-circular-progressbar/dist/styles.css';
import { MovieSkeletonCard, tvSkeletonCard } from '@/components/shared/skeletons/skeletons';
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import TvItem from '../tvItem/tvItem';

const TvSimilar = ({tvDetailsSimilarData})=>{
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        <>
            <div className={`${styles.upcoming_wrapper} ptLarge `}>
                <h3>Similar Tv Shows</h3>
                {
                    tvDetailsSimilarData.results.length > 0 ? 
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>  
                        {
                            tvDetailsSimilarData.results.length < 5 ?
                            <div className="item_grid">
                                {
                                    tvDetailsSimilarData.results.map((item,i)=>{
                                        return(
                                            !loading ? <MovieSkeletonCard /> : <TvItem key={i} item = {item} />
                                        )
                                    })
                                }
                            </div>
                            :
                            <div className={`${styles.details_area} d-flex scroll_area`}>
                                <Carousel breakPoints={breakPoints}>
                                    {
                                        tvDetailsSimilarData.results.map((item,i)=>{
                                            return(
                                                !loading ? <tvSkeletonCard /> : <TvItem key={i} item = {item} />
                                            )
                                        })
                                    }
                                </Carousel>                            
                            </div>
                        }                      
                                                
                    </div>
                    :
                    <div className="no-data">No Similar Tv Shows Found</div>
                }
                
            </div>
        </>
    )
}

export default TvSimilar;