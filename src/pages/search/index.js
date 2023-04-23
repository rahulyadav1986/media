import { useState } from "react"

const Search =({value})=>{
    const [query, setquery] = useState("")
    return(
        <>
            <h1>{value}</h1>
        </>
    )
}

export default Search