import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch data", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

export const CreateTodo = createAsyncThunk("create Todo", async (newTodo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  return response.json();
});

export const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
      console.log("error", action.payload);
    });

    builder.addCase(CreateTodo.pending,(state,action)=>{
        state.isLoading = true;
        state.isError = false;
    })

    builder.addCase(CreateTodo.fulfilled, (state,action)=>{
        state.data = [...state.data, action.payload]
        state.isLoading = false;
    })

    builder.addCase(CreateTodo.rejected,(state,action)=>{
        state.isError = true;
        state.isLoading = false;
        console.log("Error" , action.payload
        )
    })
  },
  reducers: {},
});

export default fetchSlice.reducer;
