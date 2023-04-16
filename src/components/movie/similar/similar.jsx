import styles from './style.module.scss'
import 'react-circular-progressbar/dist/styles.css';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import MovieItem from '../movieItem/movieItem';

const MovieSimilar = ({MovieDetailsSimilarData})=>{
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
                   MovieDetailsSimilarData.results.length > 0 ?  
                   <>
                        <h3>Similar Movies</h3>
                        <div className={`${styles.main_wrapper} d-flex justify-content-between`}>                        
                            <div className={`${styles.details_area} d-flex scroll_area`}>
                                <Carousel breakPoints={breakPoints}>
                                    {
                                        MovieDetailsSimilarData.results.map((item,i)=>{
                                            return(
                                                !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
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

export default MovieSimilar;