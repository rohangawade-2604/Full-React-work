import React from 'react'
import { nanoid } from 'nanoid'
import { ADDTODOS, DELETETODOS } from './Action'

export const TodoReducer = (state, action) => {

    switch (action.type) {
        case "ADDTODOS":
            console.log(ADDTODOS, "is been page")
            return { trend: [...state.trend, { "id": nanoid(), "task": action.task, "completed": false }] }

        case "DELETETODO" :
            console.log(DELETETODOS , "how its run")
            return {trend :state.trend.filter((todo) => todo.id !== action.task  )}

        }

       




}


