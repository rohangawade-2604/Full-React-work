import { Children, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const  AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [isAuth , setIsAuth] = useState(false);

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    };

    return(
        <AuthContext.Provider value={{isAuth , setIsAuth , toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}