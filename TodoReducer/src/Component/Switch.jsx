import React from 'react'
import { nanoid } from 'nanoid'

export const TodoReducer = (state , action) => {

    switch(action.type) {
        case "ADDTODOS" : 
            return {trend :[...state,{"id" : nanoid(), "task": task , "completed": false }]}
            console.log(state, "Is been occured")
    }



 
  
}


