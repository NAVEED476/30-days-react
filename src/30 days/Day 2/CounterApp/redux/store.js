import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/Slice"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})