import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Slice-Component/CounterSlice"

export const Store = configureStore({
    reducer : {Counter : CounterReducer}
});