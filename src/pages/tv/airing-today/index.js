
import { useEffect, useState } from "react";
import { env } from 'next.config';
import MainContainer from "@/components/shared/mainContainer/mainContainer";
import Head from "next/head";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import TvItem from "@/components/tv/tvItem/tvItem";

const AiringToday = ()=>{
    const [upcoimgData, setupcoimgData] = useState(null);
    const [pageCount,setPageCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const url = `${env.apiUrl}/tv/airing_today?api_key=${env.tmdbApiKey}`;
    const NextPage = ()=>{
        setPageCount(pageCount + 1)
        console.log(pageCount + 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount + 1}`)
        .then(response => response.json())
        .then(upcoimgData => {
            setupcoimgData(upcoimgData)
            console.log(upcoimgData)
        })
        setLoading(false)
    }
    const PrevPage = ()=>{
        setPageCount(pageCount - 1)
        console.log(pageCount - 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount - 1}`)
        .then(response => response.json())
        .then(upcoimgData => {
            setupcoimgData(upcoimgData)
            console.log(upcoimgData)
        })
    }
   
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
        fetch(`${env.apiUrl}/tv/airing_today?api_key=${env.tmdbApiKey}&page=1`)
        .then(response => response.json())
        .then(upcoimgData => {
            setupcoimgData(upcoimgData)
            console.log(upcoimgData)
        })
    },[])
    const getData = async(pageCount)=>{
        setTimeout(() => setLoading(true), 2000);
        const upcoimgDataResponse = await fetch(`${env.apiUrl}/tv/airing_today?api_key=${env.tmdbApiKey}&page=${pageCount}`)
        const ActualData = await upcoimgDataResponse.json()
        return ActualData
    }
    const handleClick = async(data)=>{
        console.log(data)        
        const currentPage = data.selected + 1
        const dataFromServe = await getData(currentPage)
        setupcoimgData(dataFromServe)
        
    }
    const HeroBackDrop = {
        backgroundImage : `url(${env.image_base_url}/original/${upcoimgData?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path})`
    }
    return(
        <>
            <Head>
                <title>Airing Today Tv Shows::Media</title>
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
                            <h1>Airing Today Tv Shows</h1>
                        </MainContainer>
                    </div>
                    <MainContainer>
                        <div className="row_movie_wrapper"> 
                            <div className="main_grid_wrapper">
                            
                                <div className="grid">
                                    {
                                        upcoimgData?.results.map((item,i)=>{                                        
                                            return(
                                                <div key={i}  className="portion">
                                                    <TvItem item ={item} />
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
                            <span className="pageCount">{pageCount}</span> of <span className="TotalpageCount">{upcoimgData?.total_pages}</span>
                            <button className="next" onClick={NextPage}>Next <Image src="/images/right.png" fill={true} alt="icon" /></button>
                        </div>

                        <div className="pagination_wrapper">
                            <ReactPaginate
                                previousLabel =""
                                nextLabel = ""
                                breakLabel = "..."
                                pageRangeDisplayed={3}
                                pageCount={upcoimgData?.total_pages}
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

export default AiringToday;


// export async function getServerSideProps(){
//     const responsstvPopular = await fetch(`${env.apiUrl}/tv/popular?api_key=${env.tmdbApiKey}`);
//     const tvPopularData = await responsstvPopular.json();
//     return{
//       props:{
//         tvPopularData: tvPopularData,
//       }
//     }
//   }