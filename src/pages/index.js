import Head from 'next/head';
import { enviourment } from 'next.config';
import Hero from '@/components/hero/hero';
import MoviePopular from '@/components/movie/popular/moviePopular';
import MovieUpcoming from '@/components/movie/upcoming/movieUpcoming';
import MovieNowPlaying from '@/components/movie/nowPlaying/movieNowPlaying';
import MovieTopRated from '@/components/movie/topRated/movieTopRated';
import MovieLatest from '@/components/movie/latest/movieLatest';

const Home = ({HeroData, MoviePopularData, MovieUpcomingData, responssMovieTopRatedData})=>{
  return (
    <>
      <Head>
        <title>Home::Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero HeroData={HeroData} />
      <MoviePopular MoviePopularData={MoviePopularData} />
      <MovieUpcoming MovieUpcomingData={MovieUpcomingData} />
      <MovieLatest HeroData={HeroData} />
      <MovieNowPlaying HeroData={HeroData} />
      <MovieTopRated responssMovieTopRatedData={responssMovieTopRatedData} />
      
    </>
  )
}

export default Home;

export async function getServerSideProps(){
  const responseHero = await fetch(`${enviourment.apiUrl}/movie/now_playing?api_key=${enviourment.tmdbApiKey}`);
  const HeroData = await responseHero.json();
  
  const responssMoviePopular = await fetch(`${enviourment.apiUrl}/movie/popular?api_key=${enviourment.tmdbApiKey}`);
  const MoviePopularData = await responssMoviePopular.json();

  const responssMovieUpcoming = await fetch(`${enviourment.apiUrl}/movie/upcoming?api_key=${enviourment.tmdbApiKey}`);
  const MovieUpcomingData = await responssMovieUpcoming.json();

  const responssMovieTopRated = await fetch(`${enviourment.apiUrl}/movie/top_rated?api_key=${enviourment.tmdbApiKey}`);
  const responssMovieTopRatedData = await responssMovieTopRated.json();
  
  return{
    props:{
      HeroData: HeroData,
      MoviePopularData: MoviePopularData,
      MovieUpcomingData: MovieUpcomingData,
      responssMovieTopRatedData: responssMovieTopRatedData
    }
  }
}

