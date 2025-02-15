import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextApi'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const {toggleAuth} = useContext(AuthContext)
    // console.log(toggleAuth, "is rendering")

    const navigat = useNavigate();

    if (toggleAuth) {
        navigat("/")
    }



  return (
   
    <div>
       <h1>Welcome to the HomePage</h1> 
        <button onClick={toggleAuth}>Login</button>
    </div>
  )
}

export default HomePage
