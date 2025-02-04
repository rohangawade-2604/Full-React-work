import React, { useState } from 'react'

const Child = ({value}) => 
    <h3>Count is : {value}</h3>

const Count = () => {

    const [state , setState] = useState(0)
  return (
    <div>
      <h1> {state}</h1>
      <button onClick={() => setState(state +1)}>ADD</button>
      <button onClick={() => setState(state -1)}>REDUCE</button>
    </div>
  )
}

export default Count
