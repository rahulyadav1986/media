/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['image.tmdb.org']
  },
  enviourment:{
    tmdbApiKey: ['b976c85658ffab05600e4ade8e894259'],    
    apiUrl: 'https://api.themoviedb.org/3',
    image_base_url: 'https://image.tmdb.org/t/p'
  }
}

module.exports = nextConfig
