import Link from 'next/link';
import MainContainer from '../mainContainer/mainContainer';
import styles from './header.module.scss';
import Image from 'next/image';
import Searchbar from './searchbar/searchbar';
import Menu from './menu/menu';
import Mode from './mode/mode';
const Header = ()=>{
    return(
        <>
            <header className={styles.header}>
                <MainContainer>
                    <div className={`${styles.details} d-flex align-items-center justify-content-between`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.logo}>
                                <Link href="/"><Image loading="lazy" alt="Madia" src="/images/logo.png" fill={true} /></Link>
                            </div>
                            {/* <Searchbar /> */}
                        </div>
                        <div className='d-flex align-items-center'>
                            <Menu />
                            {/* <Mode /> */}
                        </div>                        
                    </div>
                </MainContainer>
            </header>
        </>
    )
}

export default Header;