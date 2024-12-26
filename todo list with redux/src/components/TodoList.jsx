import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "./AddTodo";
import { completeTodo } from "../store/slices/todoListSlice";
import { addCompletedToDo } from "../store/slices/completedListSlice";

function TodoList() {
  let todoListArray = useSelector((state) => state.todoList.todoListArray);
  let dispatch = useDispatch()
  console.log(todoListArray);

  return (
    <div>
      <AddTodoForm />
      <ul>
        {todoListArray.map((item) => {
          return (
            <li style={{textDecoration: item.completed ? 'line-through' : 'none'}} key={item.id}>
              <p>{item.todo}</p>
              <button disabled={item.completed} onClick={() => {
                dispatch(completeTodo(item.id))
                dispatch(addCompletedToDo({...item, completed: true}))
              } }>COMPLETE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
