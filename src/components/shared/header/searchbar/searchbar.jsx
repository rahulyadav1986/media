import { useState } from "react";
import styles from "./style.module.scss";
import { useRouter } from 'next/router'
import { env } from "/next.config";
const Searchbar = ()=>{
    const [value, setValue] = useState("");
    var url = `${env.apiUrl}/movie/popular?api_key=${env.tmdbApiKey}`;
    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = () => {
        fetch(`${env.apiUrl}/movie/popular?api_key=${env.tmdbApiKey}&page=1`)
        .then(response => response.json())
        .then(value => {
            setValue(value)
            console.log(value)
        })
    };
    return(
        <>
            <div className={styles.search_bar_wrapper}>
                <input type="text" value={value} onChange={onChange} />
                <input type="submit" onClick={() => onSearch(value)} value="" />
              
            </div>
        </>
    )
}

export default Searchbar;