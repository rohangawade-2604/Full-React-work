import React, { useReducer } from 'react'
import { TodoReducer } from './Switch'
import { useState } from 'react'

export const Logistic = () => {

    const InitialState = {trend : []}

      const [todo , dispatch ] = useReducer (TodoReducer , InitialState)  
      // inspite of state i have take todo in syntax
      const [input , setInput] = useState('');

      const AddTodo = () => {
        if(input.trim()) {
          dispatch({type: "ADDTODOS" ,task: input})
          setInput('')
          console.log(AddTodo, "is beeing showing")
        }
      }


    return (
    <div>
        
        <h1>TODOREDUCER LIST</h1>

        <input type="text" name='name' placeholder='Enter the Todo' 
        onChange={(e) => setInput(e.target.value)}/>
        <button onClick={AddTodo} > + </button>

        <ul>
          {todo.trend.map((el) => (
            <li key={el.id}>
              {el.task}
              <button onClick={() => dispatch({type: "DELETETODO" , task: el.id})}> - </button>
            </li>
          
          ))}

          
        </ul>
    </div>
  )
}

