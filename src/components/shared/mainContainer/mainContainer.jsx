import style from './styles.module.scss';
const MainContainer = ({children})=>{
    return (
        <>
            <div className={style.container}>{children}</div>
        </>
    )
}

export default MainContainer;