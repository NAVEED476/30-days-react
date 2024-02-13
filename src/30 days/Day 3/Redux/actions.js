import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./FakeData";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: userData,
  },
  reducers: {
    adduser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const {adduser} = userSlice.actions;
export default userSlice.reducer;
