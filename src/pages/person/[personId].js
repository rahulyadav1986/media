import CircleRating from '@/components/shared/circleRating/circleRating';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import { enviourment } from 'next.config';
import Head from 'next/head';
import Image from 'next/image';
import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import Casting from '@/components/movie/casting/casting';
import ReactPlayer from 'react-player/lazy'
import MovieRecomended from '@/components/movie/recomended/recomended';
import MovieSimilar from '@/components/movie/similar/similar';
import styles from './styles.module.scss';
import MovieItem from '@/components/movie/movieItem/movieItem';
import { MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';
import Carousel from "react-elastic-carousel";
const CastDetails = ({CastDetailsData, PersonDetailsData})=>{
    const [loading, setLoading] = useState(false);
    const [more, setMore] = useState(null)
    const moreToggle = ()=>{
        setMore(!more)
    }
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
            <MainContainer>
                <div className={styles.person_list_details_wrap}>
                    <div className={styles.person_personal_details}>
                        <div><Image src={`${enviourment.image_base_url}/w300${PersonDetailsData.profile_path}`} fill={true} alt={PersonDetailsData.name} /></div>
                        
                        <h3>Personal Info</h3>
                        <div className={styles.info_data}>
                            <h4>Know for</h4>
                            <p>{PersonDetailsData.known_for_department}</p>
                        </div>
                        <div className={styles.info_data}>
                            <h4>Gender</h4>
                            <p>{PersonDetailsData.gender === 1 ? 'Female' : 'Male'}</p>
                        </div>
                        <div className={styles.info_data}>
                            <h4>Birthday</h4>
                            <p>{PersonDetailsData.birthday}</p>
                        </div>
                        {
                            !PersonDetailsData.deathday === 'null' ?
                            <div className={styles.info_data}>
                                <h4>Deathday</h4>
                                <p>{PersonDetailsData.deathday}</p>
                            </div>:
                            ""
                        }
                        <div className={styles.info_data}>
                            <h4>Place of Birth</h4>
                            <p>{PersonDetailsData.place_of_birth}</p>
                        </div>
                        
                    </div>
                    <div className={styles.person_main_details_wrapper}>
                        <h1>{PersonDetailsData.name}</h1>
                        <h4>Biography</h4>
                        <p>
                            {
                                more ? 
                                PersonDetailsData.biography                                
                                :
                                PersonDetailsData.biography.substring(0, 250,) + '...'
                                
                            }
                        </p>
                        <span className={`${styles.more}`} onClick={moreToggle}>                            {
                                more ? 'Read Less' : 'Read More'
                            }
                        </span>
                        <h4>Known For</h4>
                        <Carousel breakPoints={breakPoints}>
                            {
                                CastDetailsData.cast.map((item,i)=>{                                        
                                    return(
                                        !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
                                        
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </MainContainer>
            
        </>
    )
}

export default CastDetails

export async function getServerSideProps(context){
    const {params} = context;
    const responssCastDetails = await fetch(`${enviourment.apiUrl}/person/${params.personId}/movie_credits?api_key=${enviourment.tmdbApiKey}`);
    const responssPersonDetails = await fetch(`${enviourment.apiUrl}/person/${params.personId}?api_key=${enviourment.tmdbApiKey}`);

    const PersonDetailsData = await responssPersonDetails.json();
    const CastDetailsData = await responssCastDetails.json();
    return{
      props:{
        CastDetailsData: CastDetailsData,
        PersonDetailsData: PersonDetailsData
      }
    }
  }