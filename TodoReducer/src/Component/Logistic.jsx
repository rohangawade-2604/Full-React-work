import React, { useReducer } from 'react'
import { TodoReducer } from './Switch'
import { useState } from 'react'
import { UPDATETODOS } from './Action'

export const Logistic = () => {

  const InitialState = { trend: [] }

  const [todo, dispatch] = useReducer(TodoReducer, InitialState)
  // inspite of state i have take todo in syntax

  const [input, setInput] = useState('');
  const [editInput, setEditInput] = useState('');
  // used for input box

  const [edit, setEdit] = useState(null)
  //mainly used for targeting the todo input box for editing


  const Editing = (id, currentTask) => {
    setEdit(id)
    setInput(currentTask)

    console.log(id, "show the editing task")
  }

  const UpdateTodos = () => {
    if (input.trim()) {
      dispatch({ type: "UPDATETODOS", id: edit, updatetask: input })
      setEdit(null)
      setInput('')
    }
  }

  const AddTodo = () => {
    if (editInput.trim()) {
      dispatch({ type: "ADDTODOS", task: editInput })
      setEditInput('')
      console.log(AddTodo, "is beeing showing")
    }
  }


  return (
    <div>

      <h1>TODOREDUCER LIST</h1>

      <input value={editInput}  type="text" name='name' placeholder='Enter the Todo'
        onChange={(e) => setEditInput(e.target.value)} />
      <button onClick={AddTodo} > + </button>

      <ul>
        {todo.trend.map((el) => (
          <li key={el.id}>

            {edit === el.id ? (
              <>
                <input value={input} type="text" name="name" placeholder=''
                  onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => UpdateTodos(el.id)}>Up</button>
              </>
            ) : (
              <>
                {el.task}
                <button onClick={() => dispatch({ type: "DELETETODO", task: el.id })}> - </button>
                <button onClick={() => Editing(el.id, el.task)}>Edit</button>
              </>
            )}

          </li>

        ))}


      </ul>
    </div>
  )
}

