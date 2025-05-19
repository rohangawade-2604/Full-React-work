import React, { useContext, useState } from 'react'
import { AllContext } from '../Context-Component/Logic'

const Todolist = () => {

  const data = useContext(AllContext)

  const [array, setArray] = useState('')
  const [editingId, setEditingId] = useState(null)

  // console.log(props,"its showns")

  // console.log(data, "is been deleted")
  // console.log(data.updateTodos, "is been edited")

  const handleEdit = (id, currentTask) => {
    setEditingId(id)
    setArray(currentTask)
    console.log(id, "is been updated and more");

  }

  const handleUpdates = (id) => {
    if (array.trim()) {
      data.updateTodos(id, array);
      setEditingId(null);
      setArray('');
      console.log(data, "is been updated")
    }
  };

  return (
    <div>
      <div className="map-list ml-[42%] mt-10  ">
        {
          data.todo.map((el) => (
            
            <h1 key={el.id} className='h1-tag w-70'>


              {editingId === el.id ? (
                <>
                <div>
                  
                </div>
                <div>
                    <input type="text"
                    value={array}
                    onChange={(e) => setArray(e.target.value)} className='border-2'/>
                  <button onClick={() => handleUpdates(el.id)} ><i class="fa-solid fa-pen-nib"></i></button>
                </div>
                

                </>

              ) : (
                <>
                <div className='ml-5'>
                  {el.task}
                  <button onClick={() => data.deleteTodos(el.id)} style={{ "marginLeft": "80px" }} ><i className="fa-solid fa-trash ml-5"></i></button>
                  <button onClick={() => handleEdit(el.id, el.task)} className='ml-6'>Edit</button>
                </div>
                  

                </>

              )}


            </h1>
          ))
        }
      </div>
    </div>
  )
}

export default Todolist
