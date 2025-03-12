  import React, { useEffect, useState } from 'react'

  export const SetInterval = () => {

      const [count , setCount] = useState(0)
      const [toggle , setToggle] = useState(false)

    useEffect(() => {
      const id = setInterval(() => {
        console.log("time is outed", Date.now())
      },2000)
      return() => clearInterval(id)
    },[])
  

          

    return (
      <div className='setPart'>
          <h1>count: {count}</h1>
          <button onClick={() => setCount((prev) => prev+1 )}>+</button>
          <button onClick={() => setCount((prev) => prev-1)}>-</button>

    
          <button onClick={() => {setInterval}}>Toggle</button>
      </div>
    )
  }


