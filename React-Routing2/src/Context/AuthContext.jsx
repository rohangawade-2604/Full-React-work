/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const Authcontext = createContext(null)

export const AuthContextProvider = ( props ) => {
    
    const [auth ,setAuth] = useState(false);

    const toggleAuth = () => {
        setAuth (!auth)
    }; 

    return(
    
        <Authcontext.Provider value={{ auth , toggleAuth}}>
            {props.children}
        </Authcontext.Provider>
        
    )   

}