import { createContext, useState } from "react";

import { nanoid } from 'nanoid'

export const AllContext = createContext(null);

export const ContextProvider = (props) => {

    const [todo, setTodo] = useState([]);

    const addTodos = (task) => {     
        setTodo([...todo, { "id": nanoid(), "task": task, "completed": false }])
        console.log(todo, "in Logic contaxt page")
    }

     const deleteTodos = (id) =>{
        setTodo(todo.filter((todo) => todo.id !== id))
        console.log(todo ,id, "in front page")
     }

     const updateTodos = (id , updatedTask) =>{
        setTodo(todo.map((todo)=> (todo.id === id ?{...todo, task: updatedTask}:todo)))
        // console.log(id);
        
     }





    return <AllContext.Provider value={{ todo, addTodos, deleteTodos,updateTodos }}>
        {props.children}
    </AllContext.Provider>
}