import MovieItem from "@/components/movie/movieItem/movieItem";
import { MovieInnerSkeletonCard } from "@/components/shared/skeletons/skeletons";
import { useEffect, useState } from "react";
import { enviourment } from 'next.config';
import MainContainer from "@/components/shared/mainContainer/mainContainer";

const NowPlaying = ({NowPlayingData})=>{
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
    })
    return(
        <>
            <MainContainer>
                <div className="row_movie_wrapper"> 
                    <div className="main_grid_wrapper">
                        <div className="filter_area d-flex justify-content-between">
                            <h1>Now Playing Movies</h1>
                        </div>
                        <div className="grid">
                            {
                                NowPlayingData.results.map((item,i)=>{                                        
                                    return(
                                        !loading ? <MovieInnerSkeletonCard /> : 
                                        <div className="portion">
                                            <MovieItem src="/popular" key={i} item ={item} />
                                        </div>                         
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </MainContainer>
            
        </>
    )
}

export default NowPlaying;


export async function getServerSideProps(){
    const responssMovieNowPlaying = await fetch(`${enviourment.apiUrl}/movie/now_playing?api_key=${enviourment.tmdbApiKey}`);
    const NowPlayingData = await responssMovieNowPlaying.json();
    return{
      props:{
        NowPlayingData: NowPlayingData,
      }
    }
  }