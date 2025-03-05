import React, { useContext, useReducer ,useRef } from 'react'
import { TodoContext } from '../Context/Logic'
import { AddTodos , DeleteTodos } from './Action'
import { Reducer } from './Reducer'


export const Todos = () => {

    const ContestDate = useContext(TodoContext)
    const inputCatch = useRef("")

    const [state , dispatch] = useReducer(Reducer , ContestDate.data)
    console.log(ContestDate , "this is the form todo")

    const handleInput = () => {
        let values = inputCatch.current.value;
        dispatch(AddTodos(values));
        inputCatch.current.value = "";
        ContestDate.setData(state)
    };
    console.log(state , "checkmates")


  return (
    <div>
        <h1>TodoList</h1>
        <input type="text" placeholder='Enter the Task' ref={inputCatch} />

        <input type="button" value="submit" onClick={handleInput}  />
      
    </div>
  )
}


