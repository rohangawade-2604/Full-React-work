import React, { useContext, useEffect, useState } from 'react'
import { ContextPag } from "../ContextPagi/context"
import axios from 'axios'

export const Pagination = () => {

    const [page, setPage] = useState(null);
    
    const {store , setStore} = useContext(ContextPag)

    const fetchData = async () => {
        try {
            let Response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(Response.data, "api");
            setStore(Response.data)
        }
        catch (err) {
            console.log(err, "error is been defined");
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            {store.map((el) => (
                <h1 key={el.id}>
                    {el.id}- {el.title}
                </h1>
            ))}
        </>
    )
}
