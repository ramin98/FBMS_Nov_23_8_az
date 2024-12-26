import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCompletedToDo } from "./completedListSlice";

export const completedListFetch = createAsyncThunk('content/completedListFetch', async () => {
    let res = await fetch('http://localhost:5000/completedList')
    let data = await res.json()
    return data
})

export const addToCompletedListFetch = (todo) => {
    let todoItem = {...todo, completed: true}
    return async (dispatch) => {
        let res = await fetch('http://localhost:5000/add-completedList', {
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
            dispatch(addCompletedToDo(todoItem))
        }
    } 
}