/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['image.tmdb.org', 'firebasestorage.googleapis.com']
  },
  enviourment:{
    tmdbApiKey: ['b976c85658ffab05600e4ade8e894259'],    
    apiUrl: 'https://api.themoviedb.org/3',
    image_base_url: 'https://image.tmdb.org/t/p'
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/movie/movie/popular',
  //       destination: '/movie/popular', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/movie/movie/recomended',
  //       destination: '/movie/recomended', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/movie/movie/top-rated',
  //       destination: '/movie/top-rated', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/movie/movie/upcoming',
  //       destination: '/movie/upcoming', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/movie/movie/now-playing',
  //       destination: '/movie/now-playing', 
  //       permanent: true,
  //     },

  //     {
  //       source: '/tv/tv/popular',
  //       destination: '/tv/popular', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/tv/tv/recomended',
  //       destination: '/tv/recomended', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/tv/tv/top-rated',
  //       destination: '/tv/top-rated', 
  //       permanent: true,
  //     },
  //     {
  //       source: '/tv/tv/upcoming',
  //       destination: '/tv/upcoming', 
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
