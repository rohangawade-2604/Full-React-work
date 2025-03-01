import React, { useReducer } from 'react'
import { TodoReducer } from './Switch'

export const Logistic = () => {

    const InitialState = {trend : []}

      const [todo , dispatch ] = useReducer (TodoReducer , InitialState)  
      // inspite of state i have take todo in syntax
      const [input , setInput] = useState('')

      const AddTodo = () => {
        if(input.trim()) {
          dispatch({type: "ADDTODOS" , task : input})
        }
      }


    return (
    <div>
        
        <h1>TODOREDUCER LIST</h1>

        <input type="text" name='name' placeholder='Enter the Todo' 
        />
        <button > + </button>
    </div>
  )
}

