import { createSlice } from "@reduxjs/toolkit";
import {FakeuserData} from "./Fakedata.js";

const userSlice = createSlice({
  name: "users",
  initialState: [{ value: FakeuserData }],
  reducers: {
    addUser:(state)=>{}
  },
});

export default userSlice.reducer;
