import styles from "./style.module.scss"
import Image from 'next/image'
import Moment from "react-moment";
import { env } from 'next.config';
const ReviewsItem = ({item})=>{
    return(
        <>
            <div className={`${styles.author_details}`}>
                <div className={`${styles.author_head} d-flex align-items-center`}>
                    <Image 
                        loading="lazy"
                        src={`${item.author_details.avatar_path !==null && item.author_details.avatar_path !== 'null' ? `${env.image_base_url}/w300/${item.author_details.avatar_path}`:"/images/placeholder.svg"}`}
                        fill={true} 
                        alt="" 
                    />
                    <div>
                        <h4>{item.author_details.name}</h4>
                        <p>{item.author_details.username}</p>
                    </div>
                    
                </div>
                <div className={styles.content_details}>
                    <p>{item.content}</p>
                    {
                        item.author_details.rating !== null && item.author_details.rating !== "null" ?
                        <div className={`${styles.star} d-flex align-items-center star`}>
                            <Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {item.author_details.rating}/10
                        </div>
                        :
                        ""
                    }
                    <ul className={`${styles.edit_details} d-flex`}>
                        <li className="d-flex align-items-center">
                            Created Date:
                            <div className="d-flex align-items-center">
                                <span><Moment format="Do, MMMM YYYY">{item.created_at}</Moment></span>
                                <span>Time: <Moment format="HH:MM">{item.created_at}</Moment>  </span> 
                            </div>
                                                                                
                        </li>
                        <li className="d-flex align-items-center">
                            Updated Date:
                            <div className="d-flex align-items-center">
                                <span><Moment format="Do, MMMM YYYY">{item.updated_at}</Moment></span> 
                                <span>Time: <Moment format="HH:MM">{item.updated_at}</Moment> </span> 
                            </div>
                                                                                
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default ReviewsItem