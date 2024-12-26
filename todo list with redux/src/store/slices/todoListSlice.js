import {createSlice} from '@reduxjs/toolkit'

let todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todoListArray: [],
  },
  reducers: {
    addTodo: (state, action) => {
      let newList = [...state.todoListArray];
      console.log(newList)
      let todo = {
        todo: action.payload,
        completed: false,
        id: newList.length === 0 ? 1 : newList.at(-1).id + 1,
      };
      if(newList.length >= 10){
        newList.shift()
      }
      newList.push(todo);
      return { ...state, todoListArray: newList };
    },
    completeTodo: (state, action) => {
      let newList = [...state.todoListArray];
      let index = newList.findIndex((item) => item.id === action.payload)
      let obj = {...newList[index], completed: true}
      newList[index] = obj
      return { ...state, todoListArray: newList };
    },
  },
});

export const {addTodo, completeTodo} = todoListSlice.actions
export default todoListSlice.reducer