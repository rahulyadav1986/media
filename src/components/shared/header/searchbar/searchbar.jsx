import styles from "./style.module.scss";
const Searchbar = ()=>{
    return(
        <>
            <div className={styles.search_bar_wrapper}>
                <input type="text" placeholder="Type and hit enter" name="" id="" />
                <input type="submit" value="" />
            </div>
        </>
    )
}

export default Searchbar;