import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./Slice";

export const store = configureStore({
  reducer: {
    todo: fetchSlice,
  },
});
