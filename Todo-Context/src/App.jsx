import './App.css'
import { SetInterval } from './IntervalPart/SetInterval';
import TodoInput from './TodoDesign/TodoInput';
import { useState } from 'react';
function App() {

  

  return (
    <>
      <TodoInput />

    {toggle &&   <SetInterval/>}
    <button onClick={() => {
      setToggle((prev) => prev===setInterval)
    }}>Toggle</button>
      
    </> 
  )
}

export default App
