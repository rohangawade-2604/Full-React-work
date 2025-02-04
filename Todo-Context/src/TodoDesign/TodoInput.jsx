import React from 'react'
import { useContext, useState } from 'react'
import { AllContext } from "../Context-Component/Logic"
import Todolist from './Todolist';

const TodoInput = () => {

    const [task, setTask] = useState('');
   

    const data = useContext(AllContext);

    console.log(data);


    const HandleAdd = () => {
        if (task.trim()) {
            data.addTodos(task);
            setTask('');
        }
    }

    


    return (
        <>
            <div className="Todo-App-List">
                <h1>Todo List</h1>

                <input type="text" value={task} placeholder='Enter the Value'
                    onChange={(e) => setTask(e.target.value)}
                    style={{ "padding": "10px" }} />

                <button onClick={HandleAdd} style={{ "marginLeft": "10px", "border": "2px solid black" }} ><i class="fa-solid fa-plus"></i></button>

                
                <Todolist />
            </div>

        </>
    )
}

export default TodoInput;
