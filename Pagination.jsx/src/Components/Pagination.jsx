import React, { useContext, useEffect, useState } from 'react'
import { ContextPag } from "../ContextPagi/context"
import axios from 'axios'

export const Pagination = () => {

    const [page, setPage] = useState(null);
    
    const showContext = useContext(ContextPag)

    const fetchData = async () => {
        try {
            let Response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${page}&_page=${showContext.subpage}`)

            const header = Response.headers;

            let totalCount = header["x-total-count"]
            let totalCnts = +totalCount;
            if (totalCnts) setPage(Math.ceil(totalCnts / 10));

            let dataValue = await Response.data
            showContext.setStore(dataValue)


            console.log(Response.data, "api");
           
        }
        catch (err) {
            console.log(err, "error is been defined");
        }
    };

    useEffect(() => {
        fetchData();
    }, [showContext.subpage])


    return (
        <>
            {showContext.store.map((el) => (
                <h1 key={el.id}>
                    {el.id}- {el.title}
                </h1>
            ))}

            <button
            disabled = {showContext.subpage === 1}
            onClick={() => {
                showContext.setSubPage(showContext.subpage - 1)
            }}>
                Prev
            </button>

            <button>{showContext.subpage} show</button>

            <button 
            disabled = {showContext.subpage === page}
            onClick={() => {
                showContext.setSubPage(showContext.subpage +1)
            }}>
                Next
            </button>
        </>
    )
}
