import { useState } from "react";
import styles from "./style.module.scss";
const Searchbar = ()=>{
    const [movieSearch, setMovieSearch] = useState("")
    const searchMovie = (event)=>{
        const data = event.target.value
        console.log(data)
        setMovieSearch(data)
    }
    return(
        <>
            <div className={styles.search_bar_wrapper}>
                <input type="text" onChange={searchMovie} value={movieSearch} placeholder="Type and hit enter" name="" id="" />
                <input type="submit" value="" />
            </div>
        </>
    )
}

export default Searchbar;