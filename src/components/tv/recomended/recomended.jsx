import styles from './style.module.scss'
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import TvItem from '../tvItem/tvItem';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';

const TvRecomended = ({tvDetailsRecomemdedData})=>{
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
                
                {
                   tvDetailsRecomemdedData.results.length > 0 ?  
                   <>
                        <h3>Recomended Tv Shows</h3>
                            <div className={`${styles.main_wrapper} d-flex justify-content-between`}>                        
                                    <div className={`${styles.details_area} d-flex scroll_area`}>
                                        <Carousel breakPoints={breakPoints}>
                                            {
                                                tvDetailsRecomemdedData.results.map((item,i)=>{
                                                    return(
                                                        !loading ? <MovieSkeletonCard /> : <TvItem key={i} item = {item} />
                                                    )
                                                })
                                            }
                                        </Carousel>                            
                                    </div>                        
                            </div>
                   </>
                   :
                   ""
                }
                
                
            </div>
        </>
    )
}

export default TvRecomended;