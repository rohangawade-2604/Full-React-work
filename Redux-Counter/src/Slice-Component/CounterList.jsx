import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from './CounterSlice';

export const CounterList = () => {

    const Count = useSelector((state) => state.Counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter : {Count}</h1>
        <button onClick={() => dispatch(Increment())}>+</button>
        <button onClick={() => dispatch(Decrement())}>-</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  )
}


