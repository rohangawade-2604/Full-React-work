  import React, { useEffect, useState } from 'react'

  export const SetInterval = () => {

      const [count , setCount] = useState(0)


    useEffect(() => {
      const id = setInterval(() => {
        console.log("time is outed", Date.now())
      },50000000)
      return() => clearInterval(id)
    },[])
  

          

    return (
      <div className='setPart'>
          <h1>count: {count}</h1>
          <button onClick={() => setCount((prev) => prev+1 )}>+</button>
          <button onClick={() => setCount((prev) => prev-1)} disabled={count===0}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>


         
      </div>
    )
  }


