import React, { useState } from 'react'

const Child = ({value}) => {
    return(
        <>
        <h1>Count is : {value}</h1>
        </>
    )
}

const Button = ({handleClick , label}) => {
    <button onClick={handleClick}>{label}</button> 
}

const Sibling = ({count}) => {

    // const [count , setCount] = useState(50)

    // const handleChange = (value) => {
    //     setCount(count + value);
    // }
  return (
    <div>
        <h1> where is siblings</h1>
        <Child value = {count} />
        <Button label="+" handleClick ={() => handleChange(-1)} />
        <button label="-" handleClick ={() => handleChange(1)} />
    </div>
  )
}

export default Sibling;
