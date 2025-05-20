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
      <div className="map-list ml-[42%] mt-10 max-sm:ml-10 max-sm:flex max-sm:flex-col max-sm:gap-5">
        {
          data.todo.map((el) => (

            <div className='w-90 max-sm:w-85 border-2 border-white p-2' key={el.id}>
          

            <div className=''>
             
              
              {editingId === el.id ? (
             
                <div className='ml-5 gap-5 '>
                    <input type="text"
                    value={array}
                    onChange={(e) => setArray(e.target.value)} className='border-2 w-60'/>
                  <button onClick={() => handleUpdates(el.id)} ><i class="fa-solid fa-pen-nib"></i></button>
                </div>
        
              ) : (
               
                <div className='ml-5 gap-5  '>
                  {el.task}
                    
                  <button onClick={() => data.deleteTodos(el.id)} style={{ "marginLeft": "150px", }} ><i className="fa-solid fa-trash "></i></button>
                  <button onClick={() => handleEdit(el.id, el.task)} className='ml-5'>Edit</button>
                </div>

              )}
             
            </div>
            
             

           
             </div>
          ))
        }
      </div>
    </div>
  )
}

export default Todolist
