import Image from 'next/image'
import styles from './styles.module.scss'
import { enviourment } from 'next.config';
import Carousel from "react-elastic-carousel";
import { useState } from 'react';
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
                                        <div key={i} className={styles.card_details} onClick={()=>setCastItem(i)}>
                                            <div className={styles.card_image_item}>
                                                <Image loading="lazy" src={`${enviourment.image_base_url}/w400${item.profile_path}`} fill={true} alt="" />
                                            </div>
                                            
                                        </div>                                        
                                    </>
                                )
                            })
                            
                        }
                    </Carousel>
                    {                       
                    MovieDetailsCredits.cast.map((item,i)=>{
                            return(
                                <>
                                    {
                                        castItem === i ?
                                        <div key={i} className={styles.casting_card_pop}>
                                            <div className={`${styles.main_area} d-flex`}>
                                                <div className={styles.close_cast} onClick={()=>setCastItem(false)}></div>
                                                <Image loading="lazy" src={`${enviourment.image_base_url}/w400${item.profile_path}`} fill={true} alt="" />
                                                <ul className={styles.details}>
                                                    <li><h3>{item.name}</h3></li>
                                                    <li><strong>Department: </strong> {item.known_for_department}</li>
                                                    <li><strong>Original Name: </strong> {item.original_name}</li>
                                                    <li><strong>Character Name: </strong> {item.character}</li>
                                                </ul>
                                            </div>
                                        </div> :
                                        "" 
                                    }
                                    
                                </>
                            )
                    }) 
                    }
                    
                </div>
            </div> 
            :
            ""         
        }
           
        </>
    )
}

export default Casting