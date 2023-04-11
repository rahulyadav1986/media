import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.scss'

const HeadingLink = (props)=>{
    return(
        <>
            <div className={styles.heading_wrapper}>
                <h2>{props.mainTitle}<br /> <span>{props.extraText}</span> <span className={styles.highlight}>{props.highlightedTtile}</span></h2>
                <p>{props.descriptionText}</p>                
            </div>
            <Link className="global_button small" href={props.src}>
                <Image src="/images/btn_arrow.png" fill={true} alt="icon"></Image>
                {props.buttonText}
            </Link>
        </>
    )
}

const OnlyHeading = (props)=>{
    return(
        <>
            <div className={styles.heading_wrapper}>
                <h2>{props.mainTitle}<br /> <span>{props.extraText}</span> <span className={styles.highlight}>{props.highlightedTtile}</span></h2>
                <p>{props.descriptionText}</p>                
            </div>
        </>
    )
}


export {HeadingLink, OnlyHeading}