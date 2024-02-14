import React from 'react'
import {fetchDataThunk} from "../redux-fetch/fetchSlice";
import {useDispatch, useSelector} from "react-redux";

const FetchData = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <button onClick={()=>dispatch(fetchDataThunk())}>fetch data</button>
        </div>
    </div>
  )
}

export default FetchData