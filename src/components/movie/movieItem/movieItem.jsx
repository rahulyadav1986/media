import Link from 'next/link'
import styles from './style.module.scss'
import CircleRating from '@/components/shared/circleRating/circleRating'
import Image from 'next/image'
import { enviourment } from 'next.config';
const MovieItem = ({item})=>{
    const ratingava = ()=>{
        return(
            item.vote_average * 10
        )
    }
    return (
        <>
            <div className={`${styles.card_wrapper} card_wrapper`}>
                <div className="image_wrapper">
                    <Link href={`/movie/${item.id}`}><Image loading="lazy" src={`${enviourment.image_base_url}/w300${item.poster_path}`} fill={true} alt="" /></Link>
                    <div className="circle_rating">
                        <CircleRating
                            rating={Math.floor(ratingava().toFixed(1))}
                        />
                    </div>
                </div>
                <Link href={`/movie/${item.id}`}><h3>{item.title}</h3></Link>
                <ul className="widget d-flex justify-content-between">
                    <li className='star d-flex align-items-center'><Image loading="lazy" src="/images/star.png" fill={true} alt="icon" /> {item.vote_average}/10</li>
                    <li className='d-flex align-items-center'><Image loading="lazy" alt="icon" src="/images/like.png" fill={true} /> {item.vote_count}</li>
                </ul>
            </div>
        </>
    )
}

export default MovieItem