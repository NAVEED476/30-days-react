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
    deleteuser: (state, action) => {
      state.value = state.value.filter((data) => data.id !== action.payload.id);
    },
    updateUser:(state,action)=>{
      state.value.map((obj)=>{
        if(obj.id === action.payload.id){
          obj.username = action.payload.uname
        }
      })
    }
  },
});
export const { adduser, deleteuser, updateUser } = userSlice.actions;
export default userSlice.reducer;
