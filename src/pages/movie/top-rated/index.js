import MovieItem from "@/components/movie/movieItem/movieItem";
import { MovieInnerSkeletonCard } from "@/components/shared/skeletons/skeletons";
import { useEffect, useState } from "react";
import { enviourment } from 'next.config';
import MainContainer from "@/components/shared/mainContainer/mainContainer";
import Head from "next/head";
import ReactPaginate from "react-paginate";
import Image from "next/image";

const TopRated = ()=>{
    const [topRatedData, settopRatedData] = useState(null);
    const [pageCount,setPageCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const url = `${enviourment.apiUrl}/movie/top_rated?api_key=${enviourment.tmdbApiKey}`;
    const NextPage = ()=>{
        setPageCount(pageCount + 1)
        console.log(pageCount + 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount + 1}`)
        .then(response => response.json())
        .then(topRatedData => {
            settopRatedData(topRatedData)
            console.log(topRatedData)
        })
        setLoading(false)
    }
    const PrevPage = ()=>{
        setPageCount(pageCount - 1)
        console.log(pageCount - 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount - 1}`)
        .then(response => response.json())
        .then(topRatedData => {
            settopRatedData(topRatedData)
            console.log(topRatedData)
        })
    }
   
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount}`)
        .then(response => response.json())
        .then(topRatedData => {
            settopRatedData(topRatedData)
            console.log(topRatedData)
        })
    },[])
    const getData = async(pageCount)=>{
        setTimeout(() => setLoading(true), 2000);
        const topRatedDataResponse = await fetch(`${enviourment.apiUrl}/movie/top_rated?api_key=${enviourment.tmdbApiKey}&page=${pageCount}`)
        const ActualData = await topRatedDataResponse.json()
        return ActualData
    }
    const handleClick = async(data)=>{
        console.log(data)        
        const currentPage = data.selected + 1
        const dataFromServe = await getData(currentPage)
        settopRatedData(dataFromServe)
        
    }
    return(
        <>
            <Head>
                <title>Top Rated Movies::Media</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContainer>
                <div className="row_movie_wrapper"> 
                    <div className="main_grid_wrapper">
                        <div className="filter_area d-flex justify-content-between">
                            <h1>Top Rated Movies</h1>
                        </div>
                        <div className="grid">
                            {
                                topRatedData?.results.map((item,i)=>{                                        
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
                <div className="next_prev_button_wrapper d-flex align-items-center justify-content-center">
                    {
                        pageCount > 1 ?
                        <button className="prev" onClick={PrevPage}><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                        :
                        <button className="prev" disabled><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                    }                    
                    <span className="pageCount">{pageCount}</span> of <span className="TotalpageCount">{topRatedData?.total_pages}</span>
                    <button className="next" onClick={NextPage}>Next <Image src="/images/right.png" fill={true} alt="icon" /></button>
                </div>

                <div className="pagination_wrapper">
                    <ReactPaginate
                        previousLabel =""
                        nextLabel = ""
                        breakLabel = "..."
                        pageRangeDisplayed={3}
                        pageCount={topRatedData?.total_pages}
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
    )
}

export default TopRated;


// export async function getServerSideProps(){
//     const responssMovieTopRated = await fetch(`${enviourment.apiUrl}/movie/top_rated?api_key=${enviourment.tmdbApiKey}`);
//     const topRatedData = await responssMovieTopRated.json();
//     return{
//       props:{
//         topRatedData: topRatedData,
//       }
//     }
//   }