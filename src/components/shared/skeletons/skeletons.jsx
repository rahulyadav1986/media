import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './skeletons.module.scss';
import MainContainer from '../mainContainer/mainContainer';
const HeroSkeleton = ()=>{
    return(
        <>
            <div className={styles.hero_skeletons}>
                <SkeletonTheme baseColor="rgb(5,5,5)" highlightColor="rgb(29,30,31)">
                    <Skeleton count={1} className={styles.skelbox} />
                </SkeletonTheme>
                <MainContainer>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelHeading} />
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelParagraph} />
                        <Skeleton count={1} className={styles.skelParagraph} />
                        <Skeleton count={1} className={styles.skelParagraph} />
                    </SkeletonTheme>
                    <ul className={`${styles.widget_area} d-flex align-items-center`}>
                        <li>
                            <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                                <Skeleton count={1} className={styles.skelWidget} />
                            </SkeletonTheme>
                        </li>
                        <li className="d-flex align-items-center">
                            <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                                <Skeleton count={1} className={styles.skelWidget} />
                            </SkeletonTheme>
                        </li>
                        <li className="d-flex align-items-center">
                            <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                                <Skeleton count={1} className={styles.skelWidget} />
                            </SkeletonTheme>
                        </li>
                    </ul>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skelButton} />
                    </SkeletonTheme>                    
                </MainContainer>
            </div>
        </>
    )
}

const HeroSkeletonCard = ()=>{
    return(
        <>
            <ul className={`${styles.skel_tab_area} d-flex align-items-center`}>
                <li>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard} />
                    </SkeletonTheme>
                </li>
                <li>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard} />
                    </SkeletonTheme>
                </li>
                <li>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard} />
                    </SkeletonTheme>
                </li>
                <li>
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard} />
                    </SkeletonTheme>
                </li>
            </ul>
        </>
    )
}

const MovieSkeletonCard = ()=>{
    return(
        <>
            <div className="card_wrapper">
                <div className="image_wrapper">
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard2} />
                    </SkeletonTheme>
                </div>
                <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                    <Skeleton count={1} className={styles.skelHeading} />
                </SkeletonTheme>
                <ul className="widget d-flex justify-content-between">
                    <li>
                        <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                            <Skeleton count={1} className={styles.skelWidget2} />
                        </SkeletonTheme>
                    </li>
                    <li>
                        <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                            <Skeleton count={1} className={styles.skelWidget2} />
                        </SkeletonTheme>
                    </li>
                </ul>
            </div>
        </>
    )
}

const MovieInnerSkeletonCard = ()=>{
    return(
        <>
            <div className="card_wrapper skel_portion">
                <div className="image_wrapper">
                    <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                        <Skeleton count={1} className={styles.skeCard2} />
                    </SkeletonTheme>
                </div>
                <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                    <Skeleton count={1} className={styles.skelHeading} />
                </SkeletonTheme>
                <ul className="widget d-flex justify-content-between">
                    <li>
                        <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                            <Skeleton count={1} className={styles.skelWidget2} />
                        </SkeletonTheme>
                    </li>
                    <li>
                        <SkeletonTheme baseColor="rgb(3,3,3)" highlightColor="rgba(255,255,255,.2)">
                            <Skeleton count={1} className={styles.skelWidget2} />
                        </SkeletonTheme>
                    </li>
                </ul>
            </div>
        </>
    )
}

export {HeroSkeleton, HeroSkeletonCard, MovieSkeletonCard, MovieInnerSkeletonCard}