import MovieItem from "@/components/movie/movieItem/movieItem";
import { useEffect, useState } from "react";
import { env } from 'next.config';
import MainContainer from "@/components/shared/mainContainer/mainContainer";
import Head from "next/head";
import Image from "next/image";
import ReactPaginate from 'react-paginate';

const NowPlaying = ()=>{
    const [nowPlayingData, setNowPlayingData] = useState(null);
    const [pageCount,setPageCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const url = `${env.apiUrl}/movie/now_playing?api_key=${env.tmdbApiKey}`;
    const NextPage = ()=>{
        setPageCount(pageCount + 1)
        console.log(pageCount + 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount + 1}`)
        .then(response => response.json())
        .then(nowPlayingData => {
            setNowPlayingData(nowPlayingData)
            console.log(nowPlayingData)
        })
        setLoading(false)
    }
    const PrevPage = ()=>{
        setPageCount(pageCount - 1)
        console.log(pageCount - 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount - 1}`)
        .then(response => response.json())
        .then(nowPlayingData => {
            setNowPlayingData(nowPlayingData)
            console.log(nowPlayingData)
        })
    }
   
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
        fetch(`${env.apiUrl}/movie/now_playing?api_key=${env.tmdbApiKey}&page=1`)
        .then(response => response.json())
        .then(nowPlayingData => {
            setNowPlayingData(nowPlayingData)
            console.log(nowPlayingData)
        })
        
    },[])
    const getData = async(pageCount)=>{
        setTimeout(() => setLoading(true), 2000);
        const nowPlayingDataResponse = await fetch(`${env.apiUrl}/movie/now_playing?api_key=${env.tmdbApiKey}&page=${pageCount}`)
        const ActualData = await nowPlayingDataResponse.json()
        return ActualData
    }
    const handleClick = async(data)=>{
        console.log(data)        
        const currentPage = data.selected + 1
        const dataFromServe = await getData(currentPage)
        setNowPlayingData(dataFromServe)
        
    }
    const HeroBackDrop = {
        backgroundImage : `url(${env.image_base_url}/original/${nowPlayingData?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path})`
    }
    return(
        <>
            <Head>
                <title>Now Playing Movies::Media</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords"></meta>
                <link rel="icon" href="/images/favicon.ico" />
            </Head> 
            {
                loading ?
                <>
                    <div className="inner_hero_bg" style={HeroBackDrop}> 
                        <MainContainer>
                            <h1>Now Playing Movies</h1>
                        </MainContainer>
                    </div>
                    <MainContainer>
                        <div className="row_movie_wrapper"> 
                            <div className="main_grid_wrapper">
                                <div className="grid">
                                    {
                                        nowPlayingData?.results.map((item,i)=>{                                        
                                            return(
                                                <div key={i} className="portion">
                                                    <MovieItem item ={item} />
                                                </div>                 
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="next_prev_button_wrapper d-flex align-items-center justify-content-center">
                            {
                                pageCount > 1 ?
                                <button className="prev" onClick={PrevPage}><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                                :
                                <button className="prev" disabled><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                            }                    
                            <span className="pageCount">{pageCount}</span> of <span className="TotalpageCount">{nowPlayingData?.total_pages}</span>
                            <button className="next" onClick={NextPage}>Next <Image src="/images/right.png" fill={true} alt="icon" /></button>
                        </div>

                        <div className="pagination_wrapper">
                            <ReactPaginate
                                previousLabel =""
                                nextLabel = ""
                                breakLabel = "..."
                                pageRangeDisplayed={3}
                                pageCount={nowPlayingData?.total_pages}
                                onPageChange={handleClick}
                                breakClassName="breakline"
                                breakLinkClassName="breakline_link"
                                pageClassName="page_item"
                                pageLinkClassName="page_item_link"
                                activeClassName="page_item_active"
                                activeLinkClassName="page_item_link_active"
                                previousClassName="previous"
                                nextClassName="next"
                                containerClassName={'pagination'}
                            />
                        </div>
                    </MainContainer>    
                </>
                :
                <div className="loading_div d-flex align-items-center justify-content-center">
                    <span className="loader"></span>
                </div>
            }
            
            
        </>
    )
}

export default NowPlaying;


// export async function getServerSideProps(){
//     const responssMovieNowPlaying = await fetch(`${env.apiUrl}/movie/now_playing?api_key=${env.tmdbApiKey}`);
//     const NowPlayingData = await responssMovieNowPlaying.json();
//     return{
//       props:{
//         NowPlayingData: NowPlayingData,
//       }
//     }
//   }