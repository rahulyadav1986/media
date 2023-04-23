import CircleRating from '@/components/shared/circleRating/circleRating';
import MainContainer from '@/components/shared/mainContainer/mainContainer';
import { env } from 'next.config';
import Head from 'next/head';
import Image from 'next/image';
import Moment from 'react-moment';
import { useState } from 'react';
import Casting from '@/components/movie/casting/casting';
import ReactPlayer from 'react-player/lazy'
import MovieRecomended from '@/components/movie/recomended/recomended';
import MovieSimilar from '@/components/movie/similar/similar';
import Reviews from '@/components/movie/reviews/reviews';


const PopularDetails = ({MovieDetails, MovieDetailsTrailer, MovieDetailsKeywords, MovieDetailsCredits, MovieDetailsRecomemdedData, MovieDetailsSimilarData, ReviewsData})=>{
    const [trailers, setTrailers] = useState(false);
    const [loading, setLoading] = useState(false);
    const ratingava = ()=>{
        return(
            MovieDetails.vote_average * 10
        )
    }
  
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1},
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 4 },
      ];
      

      const backDrop = {
            backgroundImage: `url(${env.image_base_url}/original${MovieDetails.backdrop_path})`,
      }
      
    
    return(
        <>
            <Head>
                <title>{MovieDetails.title}</title>
                <meta name="description" content={MovieDetails.overview} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={MovieDetailsKeywords?.keywords.map((item)=>{return(item.name)})}></meta>
                <link 
                    rel="icon" 
                    href={`${MovieDetails.poster_path !==null && MovieDetails.poster_path !=='null' ? `${env.image_base_url}/w400${MovieDetails.poster_path}` : "/images/favicon.ico"}`} 
                />
            </Head>                
            <div className="inner_movie_hero_wrapper" style={backDrop} >
                <>
                    <MainContainer>
                        <div className="main_area_content d-flex justify-content-between">
                            <div className="movie_avator_back">
                                <Image 
                                    alt={MovieDetails.title} 
                                    src={`${MovieDetails.poster_path !==null && MovieDetails.poster_path !=='null' ? 
                                    `${env.image_base_url}/w400${MovieDetails.poster_path}` : "/images/placeholder.svg"}`} 
                                    fill={true}  
                                />
                                
                            </div>
                            <div className="content_area d-flex flex-column">
                                <h1>{MovieDetails.title}</h1>
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
                                            {MovieDetails.release_date}
                                        </Moment> 
                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <Image loading="lazy" alt="icon" src="/images/earth.png" fill={true}  />
                                        {
                                                MovieDetails.production_countries.map((item, i)=>{
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
                                                MovieDetails.genres.map((item, i)=>{
                                                    return(
                                                        <>
                                                            <span key={i}>{item.name}, </span>
                                                        </>
                                                    )
                                                })
                                            }
                                    </li>
                                    <li className='d-flex align-items-center star'><Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {MovieDetails.vote_average}/10</li>
                                    <li className='d-flex align-items-center'><Image loading="lazy" alt="icon" src="/images/like.png" fill={true} /> {MovieDetails.vote_count}</li>
                                </ul>
                                <div className='d-flex align-items-center buttons_wrap'>
                                    {
                                        MovieDetails.tagline !== "" && MovieDetails.tagline !== null && MovieDetails.tagline !== "null" ?
                                        <p>Tagline: <span className='highlight'>{MovieDetails.tagline}</span></p>
                                        :
                                        ""
                                    }  
                                    {
                                        MovieDetailsTrailer.results.length > 0 ?
                                        <div className={`global_button`}  onClick={() =>setTrailers(!trailers)}>
                                            <Image loading="lazy" alt="icon" src="/images/play.png" fill={true} />
                                            watch now
                                        </div>
                                        :
                                        ""
                                    }                                      
                                    
                                </div>                            
                                <h3>Overview</h3>
                                <p>{MovieDetails.overview}</p>
                                {
                                    MovieDetailsKeywords.keywords.length > 0 ? 
                                    <div>
                                        <h3>Tags</h3>
                                        <div className="tags">
                                            {
                                                MovieDetailsKeywords.keywords.map((item,i)=>{
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
                            <h3>Movie Trailers</h3>
                            <div onClick={() =>setTrailers(!trailers)}><Image src="/images/remove.png" fill={true} alt="icon" /></div>
                        </div>                    
                        <ul className="main_area">
                            {
                                MovieDetailsTrailer.results.map((item,i)=>{
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
                    <Casting MovieDetailsCredits={MovieDetailsCredits} />
                    <Reviews ReviewsData = {ReviewsData} />
                    <MovieSimilar MovieDetailsSimilarData = {MovieDetailsSimilarData} />
                    <MovieRecomended MovieDetailsRecomemdedData = {MovieDetailsRecomemdedData} />
                </MainContainer>
            </div>
        </>
    )
}


export default PopularDetails


export async function getServerSideProps(context){
    const {params} = context;
    const responssMoviePopular = await fetch(`${env.apiUrl}/movie/${params.movieId}?api_key=${env.tmdbApiKey}`);
    const responssMovieVideo = await fetch(`${env.apiUrl}/movie/${params.movieId}/videos?api_key=${env.tmdbApiKey}`);
    const responssMovieKeywords = await fetch(`${env.apiUrl}/movie/${params.movieId}/keywords?api_key=${env.tmdbApiKey}`);
    const responssMovieCredits = await fetch(`${env.apiUrl}/movie/${params.movieId}/credits?api_key=${env.tmdbApiKey}`);
    const responssMovieRecomemded = await fetch(`${env.apiUrl}/movie/${params.movieId}/recommendations?api_key=${env.tmdbApiKey}`);
    const responssMovieSimilar = await fetch(`${env.apiUrl}/movie/${params.movieId}/similar?api_key=${env.tmdbApiKey}`);
    const responssReviews = await fetch(`${env.apiUrl}/movie/${params.movieId}/reviews?api_key=${env.tmdbApiKey}`);

    const MoviePopularData = await responssMoviePopular.json();
    const MoviePopularTrailerData = await responssMovieVideo.json();
    const MoviePopularKeywordsData = await responssMovieKeywords.json();
    const MoviePopularCreditsData = await responssMovieCredits.json();
    const responssMovieRecomemdedData = await responssMovieRecomemded.json();
    const responssMovieSimilarData = await responssMovieSimilar.json();
    const ReviewsData = await responssReviews.json();
    return{
      props:{
        MovieDetails: MoviePopularData,
        MovieDetailsTrailer:  MoviePopularTrailerData,
        MovieDetailsKeywords:  MoviePopularKeywordsData,
        MovieDetailsCredits:  MoviePopularCreditsData,
        MovieDetailsRecomemdedData:  responssMovieRecomemdedData,
        MovieDetailsSimilarData:  responssMovieSimilarData,
        ReviewsData: ReviewsData
      }
    }
  }