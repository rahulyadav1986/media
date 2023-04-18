import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './styles.module.scss';
import Image from 'next/image';
import { enviourment } from 'next.config';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { MovieInnerSkeletonCard, MovieSkeletonCard } from '@/components/shared/skeletons/skeletons';

const Person = ()=>{
    const [PersonListData, setPersonListData] = useState(null);
    const [pageCount,setPageCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const url = `${enviourment.apiUrl}/person/popular?api_key=${enviourment.tmdbApiKey}`;
    const NextPage = ()=>{
        setPageCount(pageCount + 1)
        console.log(pageCount + 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount + 1}`)
        .then(response => response.json())
        .then(PersonListData => {
            setPersonListData(PersonListData)
            console.log(PersonListData)
        })
        setLoading(false)
    }
    const PrevPage = ()=>{
        setPageCount(pageCount - 1)
        console.log(pageCount - 1)
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount - 1}`)
        .then(response => response.json())
        .then(PersonListData => {
            setPersonListData(PersonListData)
            console.log(PersonListData)
        })
    }
   
    useEffect(()=>{
        setTimeout(() => setLoading(true), 2000);
        fetch(url + `&page=${pageCount}`)
        .then(response => response.json())
        .then(PersonListData => {
            setPersonListData(PersonListData)
            console.log(PersonListData)
        })
        setLoading(false)
    },[])
    const getData = async(pageCount)=>{
        setTimeout(() => setLoading(true), 2000);
        const PersonListDataResponse = await fetch(`${enviourment.apiUrl}/person/popular?api_key=${enviourment.tmdbApiKey}&page=${pageCount}`)
        const ActualData = await PersonListDataResponse.json()
        return ActualData
    }
    const handleClick = async(data)=>{
        console.log(data)        
        const currentPage = data.selected + 1
        const dataFromServe = await getData(currentPage)
        setPersonListData(dataFromServe)
        
    }
    return(
        <>
            <div className={`${styles.row_movie_wrapper} row_movie_wrapper`}>
                <MainContainer>
                    <h1>Popular People</h1>
                    <div className={`${styles.grid} grid`}>
                        {
                            PersonListData?.results.map((item,i)=>{
                                return(
                                    <>
                                        {
                                            !loading ? <MovieInnerSkeletonCard /> : 
                                            <div key={i} className={styles.portion}>
                                                <div className="card_wrapper">
                                                    <div className={`${styles.image_wrapper} image_wrapper`}>
                                                        <Link href={`/person/${item.id}`}><Image src={`${enviourment.image_base_url}/w300${item.profile_path}`} fill={true} alt={item.name} /></Link>                                                    
                                                    </div>
                                                    <h3><Link href="">{item.name}</Link></h3>
                                                </div>
                                            </div>
                                        }
                                        
                                    </>
                                )
                            })
                        }
                        
                    </div>
                    <div className="next_prev_button_wrapper d-flex align-items-center justify-content-center">
                        {
                            pageCount > 1 ?
                            <button className="prev" onClick={PrevPage}><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                            :
                            <button className="prev" disabled><Image src="/images/left.png" fill={true} alt="icon" /> Prev</button>
                        }                    
                        <span className="pageCount">{pageCount}</span> of <span className="TotalpageCount">{PersonListData?.total_pages}</span>
                        <button className="next" onClick={NextPage}>Next <Image src="/images/right.png" fill={true} alt="icon" /></button>
                    </div>

                    <div className="pagination_wrapper">
                        <ReactPaginate
                            previousLabel =""
                            nextLabel = ""
                            breakLabel = "..."
                            pageRangeDisplayed={3}
                            pageCount={PersonListData?.total_pages}
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
            </div>
        </>
    )
}


export default Person


// export async function getServerSideProps(){
//     const PageNo = 2
//     const responssPersonList = await fetch(`${enviourment.apiUrl}/person/popular?api_key=${enviourment.tmdbApiKey}&page=${PageNo}`);
//     const PersonListData = await responssPersonList.json();
//     return{
//       props:{
//         PersonListData: PersonListData
//       }
//     }
//   }