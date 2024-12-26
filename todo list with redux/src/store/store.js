import completedListSlice from "./slices/completedListSlice";
import todoListSlice from "./slices/todoListSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    completedList: completedListSlice
  }
});

export default store;
