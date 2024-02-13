import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./actions"
export const store = configureStore({
    reducer:{
        users:userReducer
    }
})
