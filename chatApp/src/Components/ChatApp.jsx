import react, { useEffect, useState } from "react"
import { createConnection , Users } from "../Utility/chats"
import { Contact } from "./contact"


export const ChatApp = () => {
    const [messages , setMessage ] = useState ([])
    const [ subscribe , setSubscribe] = useState(Users[1])
    console.log( subscribe , "is upgraded");

    useEffect(() => {
        let Connection = createConnection(subscribe);
        Connection.listen((newMessage)=> {
            setMessage((prev) => [...prev , newMessage])
        })
        return() =>{
            Connection.unsubscribed()
            setMessage([])
        }
    },[subscribe])

    console.log(ChatApp , "is beening done");

    return(
        <>
        <h1>Chat App</h1>
        <Contact user = {Users} active={subscribe} onChange={(someUser)=> setSubscribe(someUser)}/>
            <hr />  
            {
                messages.map((el) =>(
                    <li key={el}>
                        {el}
                    </li>
                ))
            }
        </>
    )
    

   
    

    
}