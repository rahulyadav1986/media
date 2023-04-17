import MainContainer from '@/components/shared/mainContainer/mainContainer';
import styles from './styles.module.scss';
import Image from 'next/image';
import { enviourment } from 'next.config';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const Person = ({PersonListData})=>{
    return(
        <>
            <div className={`${styles.row_movie_wrapper} row_movie_wrapper`}>
                <MainContainer>
                    <h1>Popular People</h1>
                    <div className={`${styles.grid} grid`}>
                        {
                            PersonListData.results.map((item,i)=>{
                                return(
                                    <>
                                        <div key={i} className={styles.portion}>
                                            <div className="card_wrapper">
                                                <div className={`${styles.image_wrapper} image_wrapper`}>
                                                    <Link href={`/person/${item.id}`}><Image src={`${enviourment.image_base_url}/w300${item.profile_path}`} fill={true} alt={item.name} /></Link>                                                    
                                                </div>
                                                <h3><Link href="">{item.name}</Link></h3>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                </MainContainer>
            </div>
        </>
    )
}


export default Person


export async function getServerSideProps(){
    const PageNo = 2
    const responssPersonList = await fetch(`${enviourment.apiUrl}/person/popular?api_key=${enviourment.tmdbApiKey}&page=${PageNo}`);
    const PersonListData = await responssPersonList.json();
    return{
      props:{
        PersonListData: PersonListData
      }
    }
  }