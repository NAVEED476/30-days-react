import {configureStore} from "@reduxjs/toolkit";
import counterValue from "../Redux/Slice"
export const store = configureStore({
    reducer:{
        counter:counterValue
    }
})