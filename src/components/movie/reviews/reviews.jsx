import styles from "./style.module.scss"
import Image from 'next/image'
import { useState } from "react";
import ReviewsItem from "./reviewsItem";
const Reviews = ({ReviewsData})=>{
    const [loadReviews, setLoadReviews] = useState(false)
    const moreToggle = ()=>{
        setLoadReviews(!loadReviews)
    }
    return(
        <>
        
            <div className={`${styles.reviews_wrapper} ptLarge`}>
                <h3>Reviews</h3>
                <div className={styles.main_reviews_area}>                    
                    {
                        ReviewsData?.results.length > 0 ?
                        <>
                            {
                                !loadReviews ? 
                                ReviewsData?.results.slice(0,1).map((item,i)=>{
                                    return(
                                        <>
                                            <ReviewsItem item={item} key={i} />
                                        </>
                                    )
                                }):
                                ReviewsData?.results.map((item,i)=>{
                                    return(
                                        <>
                                            <ReviewsItem item={item} key={i} />
                                        </>
                                    )
                                })
                            }
                        </> : 
                        <div className="no-data">No Reviews Available</div>
                        
                    }
                    
                </div>
                {
                    ReviewsData?.results.length > 1 ?
                    <div className={`${styles.more} ${!loadReviews ? `` : `${styles.active}`}`} onClick={moreToggle}>
                        {
                            !loadReviews ? "Read More" : "Read Less"
                        }                    
                        <Image src="/images/arrow-up.png" fill={true} alt="icon" />
                    </div> :
                    ""
                }
                
                
            </div>
        </>
    )
}

export default Reviews