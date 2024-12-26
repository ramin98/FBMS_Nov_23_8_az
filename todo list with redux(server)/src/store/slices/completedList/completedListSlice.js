import { createSlice } from "@reduxjs/toolkit";
import { completedListFetch } from "./completedListFetchs";

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
  extraReducers: (builder) => {
    builder.addCase(completedListFetch.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(completedListFetch.fulfilled, (state, action) => {
        state.completedListArray = action.payload;
        state.loading = false;
        state.error = null;
      }),
      builder.addCase(completedListFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addCompletedToDo } = completedListSlice.actions;
export default completedListSlice.reducer;
