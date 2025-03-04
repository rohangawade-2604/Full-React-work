import { Children, createContext, use, useState } from "react";

export const TodoContext = createContext(null)

export const TodoContextProvider = ({Children}) => {

    const [data , setData] = useState('')

    return(
        <TodoContext.Provider value={{data , setData}}>
            {Children}
        </TodoContext.Provider>
    )
}