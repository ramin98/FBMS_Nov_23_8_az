import { createSlice } from "@reduxjs/toolkit";

let completedListSlice = createSlice({
  name: "completedList",
  initialState: {
    completedListArray: [],
  },
  reducers: {
    addCompletedToDo: (state, action) => {
      let newList = [...state.completedListArray];
      newList.push(action.payload);
      return { ...state, completedListArray: newList };
    },
  },
});

export const { addCompletedToDo } = completedListSlice.actions;
export default completedListSlice.reducer;
