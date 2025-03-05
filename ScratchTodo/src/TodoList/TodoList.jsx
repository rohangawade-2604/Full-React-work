import React, { use, useContext, useEffect, useReducer } from 'react'
import { TodoContext } from '../Context/Logic'
import { Reducer } from './Reducer'
import { DeleteTodos } from './Action'


export const TodoList = () => {

    const dataHai = useContext(TodoContext)

    const [state , dispatch] = useReducer(Reducer, dataHai.data)

    const handleDelete = (id) => {
        dispatch(DeleteTodos(id));
        console.log(handleDelete , "show data")
    };

    useEffect(() => {
        dataHai.setData(state)
    },[])

  return (
    <>
      {dataHai.data &&
      dataHai.data.map((el) => (

            <div key={el.id} className='DATA'>
                <h1>{el.text}</h1>
                <button onClick={() => handleDelete(el.id)}>-</button>
                <button>Edit</button>
            </div>
      ))}
    </>
  )
}


