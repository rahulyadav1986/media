import Image from 'next/image'
import styles from './styles.module.scss'
import { enviourment } from 'next.config';
import Carousel from "react-elastic-carousel";
import { useState } from 'react';
import Link from 'next/link';
const Casting = ({MovieDetailsCredits}) =>{
    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 6 },
    ];
    const [castItem, setCastItem] = useState(false)
    return(
        <>
        {
            MovieDetailsCredits.cast.length > 0 ?
            <div className={styles.casting_wrap}>                
                <h3>Casting</h3>
                <div className={styles.details}>
                    <Carousel breakPoints={breakPoints}>
                        {
                            MovieDetailsCredits.cast.map((item,i)=>{
                                return(
                                    <>
                                        <Link href={`/person/${item.id}`}key={i} className={styles.card_details}>
                                            <div className={`${styles.card_image_item}`}>
                                                <Image 
                                                    src={`${item.profile_path !=null && item.profile_path != 'null' ? `${enviourment.image_base_url}/w300/${item.profile_path}`:"/images/placeholder.svg"}`} 
                                                    fill={true} 
                                                    alt="" 
                                                />
                                            </div>
                                            <h4>{item.name}</h4>
                                        </Link>                                         
                                    </>
                                )
                            })
                            
                        }
                    </Carousel>
                    
                    
                </div>
            </div> 
            :
            ""         
        }
           
        </>
    )
}

export default Casting