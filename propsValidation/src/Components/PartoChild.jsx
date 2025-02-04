import React, { useState } from 'react'
import Child from './Child';


const PartoChild = () => {

    const [count , setCount] = useState(0);

  return (
    <div>
      <h1>Parent to Child</h1>
      <Child value={count}/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default PartoChild;
