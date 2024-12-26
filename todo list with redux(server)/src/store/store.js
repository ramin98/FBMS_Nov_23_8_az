import completedListSlice from "./slices/completedList/completedListSlice";
import todoListSlice from "./slices/todoList/todoListSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    completedList: completedListSlice
  }
});

export default store;
