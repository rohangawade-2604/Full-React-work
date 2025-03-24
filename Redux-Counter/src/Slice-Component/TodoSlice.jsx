import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({

    name: Counter,
    initialState : { value : 0},

    reducers : {
        Increment : (state) => {
            state.value = state.value +1;
        }
    }
})