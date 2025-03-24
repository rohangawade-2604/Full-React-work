import { configureStore } from "@reduxjs/toolkit";
import {CounterReducer} from "../Slice-Component/CounterSlice"

export const store = configureStore({
    reducer : {Counter : CounterReducer}
});