import React, { useContext } from 'react'
import { AuthContext } from '../Context/ContextApi'

const Contact = () => {
    const data = useContext (AuthContext)
    console.log(data);
    
  return (
    <div>
      <h1>This is contact Page</h1>
    </div>
  )
}

export default Contact
