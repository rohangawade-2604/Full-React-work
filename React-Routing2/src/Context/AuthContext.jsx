import { useState } from "react";
import { createContext } from "react";

export const Authcontext = createContext(null)

export const AuthContextProvider = ({ children }) => {
    
    const [Auth ,setAuth] = useState(false);

    const toggleAuth = () => {
        setAuth (!Auth)
    }; 

    return(
    
        <Authcontext.Provider value={{ Auth , toggleAuth}}>
            {children}
        </Authcontext.Provider>
        
    )

}