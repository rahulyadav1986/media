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
                <h3>Similar Movies</h3>
                {
                    MovieDetailsSimilarData.results.length > 0 ?
                    <div className={`${styles.main_wrapper} d-flex justify-content-between`}>
                    {
                        MovieDetailsSimilarData.results.length < 5 ?
                        <div className="item_grid">
                            {
                                MovieDetailsSimilarData.results.map((item,i)=>{
                                    return(
                                        !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
                                    )
                                })
                            }
                        </div>
                        :
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
                    }                        
                                            
                </div>
                :
                <div className="no-data">No Similar Movies Found</div>
                }
                
            </div>
        </>
    )
}

export default MovieSimilar;