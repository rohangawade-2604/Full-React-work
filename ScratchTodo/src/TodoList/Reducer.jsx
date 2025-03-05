import React from 'react'
import {nanoid} from "nanoid"

export const Reducer = (state, action) => {

    switch(action.type){
        case "ADD_TODOS" : 
        return[...state , {id:nanoid() , text: action.payload , isEdit:false}];

        case "DELETE_TODOS" :
            return state.filter((el) => {
                console.log(state, "not defining")
               return el.id !== action.payload;
            }) 

        default:
        return state;
    }
    
 
  
}

