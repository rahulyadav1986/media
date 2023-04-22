import CircleRating from '@/components/shared/circleRating/circleRating';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import { env } from 'next.config';
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
            <Head>
                <title>{PersonDetailsData.name}::Media</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link 
                    rel="icon" 
                    href={`${PersonDetailsData.poster_path !==null && PersonDetailsData.poster_path !=='null' ? `${env.image_base_url}/w400${PersonDetailsData.profile_path}` : "/images/favicon.ico"}`} 
                />
            </Head>
            <MainContainer>
                <div className={styles.person_list_details_wrap}>
                    <div className={styles.person_personal_details}>
                        <div>
                            <Image 
                            // src={`${env.image_base_url}/w300${PersonDetailsData.profile_path}`} 
                            src={`${PersonDetailsData.profile_path !==null && PersonDetailsData.profile_path!=='null' ? `${env.image_base_url}/w300${PersonDetailsData.profile_path}` : "/images/placeholder.svg"}`}
                            fill={true} 
                            alt={PersonDetailsData.name} />
                        </div>
                        {
                           PersonDetailsData.known_for_department !==null && PersonDetailsData.known_for_department !== 'null' ||
                           PersonDetailsData.gender !== 1 || PersonDetailsData.gender !== 2 ||
                           PersonDetailsData.birthday !== null && PersonDetailsData.birthday !== 'null' ||
                           PersonDetailsData.deathday !== null && PersonDetailsData.deathday !== 'null' ||
                           PersonDetailsData.place_of_birth !== null && PersonDetailsData.place_of_birth !=='null' ?
                           <h3>Personal Info</h3>
                           :
                           ""
                        }
                        <ul className={styles.personal_details_info_wrapper}>
                            {
                                PersonDetailsData.name !==null && PersonDetailsData.name !== 'null' ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Name</h4>
                                        <p>{PersonDetailsData.name}</p>
                                    </div>
                                </li>                                
                                :
                                ""
                            }
                            {
                                PersonDetailsData.known_for_department !==null && PersonDetailsData.known_for_department !== 'null' ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Know for</h4>
                                        <p>{PersonDetailsData.known_for_department}</p>
                                    </div>
                                </li>                                
                                :
                                ""
                            }
                            {
                                PersonDetailsData.gender !== 1 || PersonDetailsData.gender !== 2 ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Gender</h4>
                                        <p>{PersonDetailsData.gender !== 1 ? 'Male' : 'Female'}</p>
                                    </div>
                                </li>                                
                                :
                                ""
                            } 
                            {
                                PersonDetailsData.birthday !== null && PersonDetailsData.birthday !== 'null' ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Birthday</h4>
                                        <p>{PersonDetailsData.birthday}</p>
                                    </div>
                                </li>
                                
                                :
                                ""
                            }
                            
                            {
                                PersonDetailsData.deathday !== null && PersonDetailsData.deathday !== 'null' ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Deathday</h4>
                                        <p>{PersonDetailsData.deathday}</p>
                                    </div>
                                </li>
                                
                                :
                                ""
                            }
                            {
                                PersonDetailsData.place_of_birth !== null && PersonDetailsData.place_of_birth !=='null' ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Place of Birth</h4>
                                        <p>{PersonDetailsData.place_of_birth}</p>
                                    </div>
                                </li>
                                
                                :
                                ""
                            }
                            {
                                PersonDetailsData.also_known_as.length > 0 ?
                                <li>
                                    <div className={styles.info_data}>
                                        <h4>Also Known as</h4>
                                        <p>
                                            {
                                                PersonDetailsData.also_known_as.map((item,i)=>{
                                                    return(
                                                        PersonDetailsData.also_known_as.length > 1 ?
                                                        <span>{item}, </span>
                                                        :
                                                        <span>{item}</span>
                                                        
                                                    )
                                                })
                                            }
                                        
                                        </p>
                                    </div>
                                </li>                                
                                :
                                ""
                            }
                        </ul>
                        
                        
                        
                    </div>
                    <div className={styles.person_main_details_wrapper}>
                        {
                            PersonDetailsData.biography !=="" && PersonDetailsData.biography !==null && PersonDetailsData.biography !=='null' ?
                            <>
                                <h4>Biography</h4>
                                <p>
                                    {
                                        more ? 
                                        PersonDetailsData.biography                                
                                        :
                                        PersonDetailsData.biography.substring(0, 200,) + '...'
                                        
                                    }
                                </p>
                                {
                                    PersonDetailsData.biography.length > 200 ?
                                    <span className={`${styles.more}`} onClick={moreToggle}>{more ? 'Read Less' : 'Read More'}</span>
                                    :
                                    ""
                                }
                                
                            </>
                            :
                            ""

                        }
                        <h4>Known For Movies</h4>
                        {
                            CastDetailsData.cast.length > 0 ? 
                            <>
                            {
                                CastDetailsData.cast.length < 4 ? 
                                <div className="item_grid">
                                    {
                                        CastDetailsData.cast.map((item,i)=>{                                        
                                            return(
                                                !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
                                                
                                            )
                                        })
                                    }
                                </div>
                                :
                                <Carousel breakPoints={breakPoints}>
                                    {
                                        CastDetailsData.cast.map((item,i)=>{                                        
                                            return(
                                                !loading ? <MovieSkeletonCard /> : <MovieItem key={i} item = {item} />
                                                
                                            )
                                        })
                                    }
                                </Carousel>

                            } 
                            </>
                            :
                            <div className='no-data'>No movie data available right now for this person</div>
                        }
                        
                        
                    </div>
                </div>
            </MainContainer>
            
        </>
    )
}

export default CastDetails

export async function getServerSideProps(context){
    const {params} = context;
    const responssCastDetails = await fetch(`${env.apiUrl}/person/${params.personId}/movie_credits?api_key=${env.tmdbApiKey}`);
    const responssPersonDetails = await fetch(`${env.apiUrl}/person/${params.personId}?api_key=${env.tmdbApiKey}`);

    const PersonDetailsData = await responssPersonDetails.json();
    const CastDetailsData = await responssCastDetails.json();
    return{
      props:{
        CastDetailsData: CastDetailsData,
        PersonDetailsData: PersonDetailsData
      }
    }
  }