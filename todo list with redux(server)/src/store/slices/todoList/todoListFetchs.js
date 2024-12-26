import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo, completeTodo } from "./todoListSlice";

export const todoListFetch = createAsyncThunk('content/todoListFetch', async () => {
    let res = await fetch('http://localhost:5000/todoList')
    let data = await res.json()
    return data
})

export const addToListFetch = (todo) => {
    let todoItem = {todo: todo, completed: false}
    return async (dispatch) => {
        let res = await fetch('http://localhost:5000/add-todoList', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        })
        let data = await res.json()
        console.log(data)
        console.log(res)
        if(res.ok){
            dispatch(addTodo({...todoItem, id: data.id}))
        }
    } 
}

export const completeTodoFetch = (id) => {
    return async (dispatch) => {
        let res = await fetch('http://localhost:5000/delete-todoList/' + id, {
            method:'DELETE',
        })
        let data = await res.json()
        console.log(data)
        console.log(res)
        if(res.ok){
            dispatch(completeTodo(id))
        }
    } 
}