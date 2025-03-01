import { useState } from 'react'
import './App.css'
import { Logistic } from './Component/Logistic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logistic/>
    </>
  )
}

export default App
