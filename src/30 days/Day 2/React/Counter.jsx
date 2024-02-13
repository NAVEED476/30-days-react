import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment } from '../Redux/Slice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>value {count}</h1>
        <button onClick={()=>dispatch(increment())}>Inc</button>
        <button onClick={()=>dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default Counter