import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "./AddTodo";
import { completeTodoFetch, todoListFetch } from "../store/slices/todoList/todoListFetchs";
import { useEffect } from "react";
import { addToCompletedListFetch } from "../store/slices/completedList/completedListFetchs";

function TodoList() {
  let todoListArray = useSelector((state) => state.todoList.todoListArray);
  let dispatch = useDispatch()
  console.log(todoListArray);

  useEffect(() => {
    dispatch(todoListFetch())
  },[])

  return (
    <div>
      <AddTodoForm />
      <ul>
        {todoListArray.map((item) => {
          return (
            <li style={{textDecoration: item.completed ? 'line-through' : 'none'}} key={item.id}>
              <p>{item.todo}</p>
              <button disabled={item.completed} onClick={() => {
                dispatch(completeTodoFetch(item.id))
                dispatch(addToCompletedListFetch(item))
              } }>COMPLETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
