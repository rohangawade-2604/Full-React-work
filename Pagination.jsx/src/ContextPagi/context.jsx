import { createContext, useState } from "react";

export const ContextPag = createContext(null)


export const ContextProvider = ({ children }) => {

    const [store, setStore] = useState([])
    const [subpage, setSubPage] = useState(1)

    return (
        <ContextPag.Provider value={{ store, setStore, subpage, setSubPage }}>
            {children}
        </ContextPag.Provider>
    )
}

