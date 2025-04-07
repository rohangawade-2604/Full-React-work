import { createContext, useState } from "react";

export const TodoContext = createContext(null)

export const TodoContextProvider = ({children}) => {

    const [data , setData] = useState([])

    const [state , dispatch] = useReducer(Reducer , ContestDate.data)

    return(
        <TodoContext.Provider value={{data , setData}}>
            {children}
        </TodoContext.Provider>
    )
}   