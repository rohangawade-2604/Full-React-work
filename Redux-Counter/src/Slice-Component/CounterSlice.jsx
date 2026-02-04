import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({

    name: 'Counter',
    initialState : { value : 0 },

    reducers : {
        Increment : (state) => {
            state.value = state.value +1;
        },

        Decrement : (state) => {
            state.value = state.value - 1;
        },

        Reset : (state) => {
            state.value = state.value = 0;
        }
    }   
});

export const {Increment , Decrement , Reset} = CounterSlice.actions;

export default CounterSlice.reducer;