import Image from 'next/image';
import styles from './style.module.scss'
import Link from 'next/link';
const Card = ({item})=>{
    return(
        <>
            <div className={styles.card_wrapper}>
                <div className={styles.image_wrapper}>
                    <Link href=""><Image loading="lazy" src={`${env.image_base_url}/w300${item.poster_path}`} fill={true} alt="" /></Link>
                </div>
                <Link href=""><h3>{item.title}</h3></Link>
                <ul className={`${styles.widget} d-flex justify-content-between`}>
                    <li className='d-flex align-items-center'><Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                    <li className='d-flex align-items-center'><Image loading="lazy" alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                </ul>
            </div>
            
        </>
    )
}

export default Card;