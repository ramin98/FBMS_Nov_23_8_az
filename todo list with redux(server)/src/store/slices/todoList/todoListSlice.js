import { createSlice } from "@reduxjs/toolkit";
import { todoListFetch } from "./todoListFetchs";

let todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoListArray: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      let newList = [...state.todoListArray];
      if (newList.length >= 10) {
        newList.shift();
      }
      newList.push(action.payload);
      return { ...state, todoListArray: newList };
    },
    completeTodo: (state, action) => {
      let newList = [...state.todoListArray];
      let index = newList.findIndex((item) => item.id === action.payload);
      let obj = { ...newList[index], completed: true };
      newList[index] = obj;
      return { ...state, todoListArray: newList };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(todoListFetch.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(todoListFetch.fulfilled, (state, action) => {
      state.todoListArray = action.payload;
      state.loading = false
      state.error = null;
    });

    builder.addCase(todoListFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { addTodo, completeTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
