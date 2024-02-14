import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataThunk = createAsyncThunk("fetchdata", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDataThunk.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchDataThunk.rejected,(state,action)=>{
        console.log("Error", action.payload);
        state.isError = true;

    })
  },

  reducers: {},
});

// export const {fetchDataThunk} = 
export default fetchSlice.reducer;
