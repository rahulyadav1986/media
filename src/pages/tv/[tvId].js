import CircleRating from '@/components/shared/circleRating/circleRating';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import { env } from 'next.config';
import Head from 'next/head';
import Image from 'next/image';
import Moment from 'react-moment';
import { useState } from 'react';
import Casting from '@/components/tv/casting/casting';
import ReactPlayer from 'react-player/lazy'
import Reviews from '@/components/tv/reviews/reviews';
import TvSimilar from '@/components/tv/similar/similar';
import TvRecomended from '@/components/tv/recomended/recomended';


const PopularDetails = ({tvDetails, tvDetailsTrailer, tvDetailsKeywords, tvDetailsCredits, tvDetailsRecomemdedData, tvDetailsSimilarData, ReviewsData})=>{
    const [trailers, setTrailers] = useState(false);
    const [loading, setLoading] = useState(false);
    const ratingava = ()=>{
        return(
            tvDetails.vote_average * 10
        )
    }

      const backDrop = {
            backgroundImage: `url(${env.image_base_url}/original${tvDetails.backdrop_path})`,
      }
    
    return(
        <>
            <Head>
                <title>{tvDetails.name}</title>
                <meta name="description" content={tvDetails.overview} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={tvDetailsKeywords?.results.map((item)=>{return(item.name)})}></meta>
                <link 
                    rel="icon" 
                    href={`${tvDetails.poster_path !==null && tvDetails.poster_path !=='null' ? `${env.image_base_url}/w400${tvDetails.poster_path}` : "/images/favicon.ico"}`} 
                />
            </Head>                
            <div className="inner_movie_hero_wrapper" style={backDrop} >
                <>
                    <MainContainer>
                        <div className="main_area_content d-flex justify-content-between">
                            <div className="movie_avator_back">
                                <Image 
                                    alt={tvDetails.name} 
                                    src={`${tvDetails.poster_path !==null && tvDetails.poster_path !=='null' ? 
                                    `${env.image_base_url}/w400${tvDetails.poster_path}` : "/images/placeholder.svg"}`} 
                                    fill={true}  
                                />
                                
                            </div>
                            <div className="content_area d-flex flex-column">
                                <h1>{tvDetails.name}</h1>
                                <ul className= "widget inner mb d-flex">
                                    <li>
                                        <div className="circle_rating inner">
                                            <CircleRating
                                                rating={Math.floor(ratingava().toFixed(1))}
                                            />
                                        </div>
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <Image loading="lazy" alt="icon" src="/images/date.png" fill={true}  />
                                        <Moment format="Do, MMMM YYYY">
                                            {tvDetails.release_date}
                                        </Moment> 
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <Image loading="lazy" alt="icon" src="/images/earth.png" fill={true}  />
                                        {
                                                tvDetails.production_countries.map((item, i)=>{
                                                    return(
                                                        <>

                                                            <span key={i}>{item.iso_3166_1}, </span>
                                                        </>
                                                    )
                                                })
                                            }
                                        
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <Image loading="lazy" alt="icon" src="/images/music-notes.png" fill={true}  />
                                        {
                                                tvDetails.genres.map((item, i)=>{
                                                    return(
                                                        <>
                                                            <span key={i}>{item.name}, </span>
                                                        </>
                                                    )
                                                })
                                            }
                                    </li>
                                    <li className='d-flex align-items-center star'><Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {tvDetails.vote_average}/10</li>
                                    <li className='d-flex align-items-center'><Image loading="lazy" alt="icon" src="/images/like.png" fill={true} /> {tvDetails.vote_count}</li>
                                </ul>
                                <div className='d-flex align-items-center buttons_wrap'>
                                    {
                                        tvDetails.tagline !== "" && tvDetails.tagline !== null && tvDetails.tagline !== "null" ?
                                        <p>Tagline: <span className='highlight'>{tvDetails.tagline}</span></p>
                                        :
                                        ""
                                    }  
                                    {
                                        tvDetailsTrailer.results.length > 0 ?
                                        <div className={`global_button`}  onClick={() =>setTrailers(!trailers)}>
                                            <Image loading="lazy" alt="icon" src="/images/play.png" fill={true} />
                                            watch now
                                        </div>
                                        :
                                        ""
                                    }                                      
                                    
                                </div>                            
                                <h3>Overview</h3>
                                <p>{tvDetails.overview}</p>
                                {
                                    tvDetailsKeywords.results.length > 0 ? 
                                    <div>
                                        <h3>Tags</h3>
                                        <div className="tags">
                                            {
                                                tvDetailsKeywords.results.map((item,i)=>{
                                                    return(
                                                        <span key={i}>{item.name}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> :
                                    ""
                                }
                                
                            </div>
                        </div>
                    </MainContainer>
                </>
                
            </div>
            {
                trailers ?
                <div className="movie_trailer_pop_wrapper">                
                    <div className="details">
                        <div className='d-flex align-items-center justify-content-between'>
                            <h3>Tv Show Clips</h3>
                            <div onClick={() =>setTrailers(!trailers)}><Image src="/images/remove.png" fill={true} alt="icon" /></div>
                        </div>                    
                        <ul className="main_area">
                            {
                                tvDetailsTrailer.results.map((item,i)=>{
                                    return(
                                        <li key={i}>
                                            <h4>{item.name}</h4>
                                            <div className='trailer_video'>
                                                <ReactPlayer
                                                    url={`https://www.youtube.com/watch?v=${item.key}`} 
                                                    width='100%'
                                                    height='100%'
                                                />  
                                            </div>
                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>                
                </div>
                :
                ""
            }
            <div className="inner_movie_body_details">
                <MainContainer>
                    <Casting tvDetailsCredits={tvDetailsCredits} />
                    <Reviews ReviewsData = {ReviewsData} />
                    <TvSimilar tvDetailsSimilarData = {tvDetailsSimilarData} />
                    <TvRecomended tvDetailsRecomemdedData = {tvDetailsRecomemdedData} />
                </MainContainer>
            </div>
        </>
    )
}


export default PopularDetails


export async function getServerSideProps(context){
    const {params} = context;
    const responsstvPopular = await fetch(`${env.apiUrl}/tv/${params.tvId}?api_key=${env.tmdbApiKey}`);
    const responsstvVideo = await fetch(`${env.apiUrl}/tv/${params.tvId}/videos?api_key=${env.tmdbApiKey}`);
    const responsstvKeywords = await fetch(`${env.apiUrl}/tv/${params.tvId}/keywords?api_key=${env.tmdbApiKey}`);
    const responsstvCredits = await fetch(`${env.apiUrl}/tv/${params.tvId}/credits?api_key=${env.tmdbApiKey}`);
    const responsstvRecomemded = await fetch(`${env.apiUrl}/tv/${params.tvId}/recommendations?api_key=${env.tmdbApiKey}`);
    const responsstvSimilar = await fetch(`${env.apiUrl}/tv/${params.tvId}/similar?api_key=${env.tmdbApiKey}`);
    const responssReviews = await fetch(`${env.apiUrl}/tv/${params.tvId}/reviews?api_key=${env.tmdbApiKey}`);

    const tvPopularData = await responsstvPopular.json();
    const tvPopularTrailerData = await responsstvVideo.json();
    const tvPopularKeywordsData = await responsstvKeywords.json();
    const tvPopularCreditsData = await responsstvCredits.json();
    const responsstvRecomemdedData = await responsstvRecomemded.json();
    const responsstvSimilarData = await responsstvSimilar.json();
    const ReviewsData = await responssReviews.json();
    return{
      props:{
        tvDetails: tvPopularData,
        tvDetailsTrailer:  tvPopularTrailerData,
        tvDetailsKeywords:  tvPopularKeywordsData,
        tvDetailsCredits:  tvPopularCreditsData,
        tvDetailsRecomemdedData:  responsstvRecomemdedData,
        tvDetailsSimilarData:  responsstvSimilarData,
        ReviewsData: ReviewsData
      }
    }
  }