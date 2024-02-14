import { configureStore } from "@reduxjs/toolkit";
import fetchSliceData from "./fetchSlice";

export const store = configureStore({
  reducer: {
    todo: fetchSliceData,
  },
});
