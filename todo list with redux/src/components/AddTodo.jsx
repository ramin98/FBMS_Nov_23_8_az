import { useRef } from "react";
import { addTodo } from "../store/slices/todoListSlice";
import { useDispatch } from "react-redux";

function AddTodoForm() {
  //   let [value, setValue] = useState("");
  let inputValue = useRef(null);

  let dispatch = useDispatch();

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        dispatch(addTodo(inputValue.current.value));
      }}
    >
      <input ref={inputValue} type="text" placeholder="WRITE TODO!" name="todo" />
      <button>ADD TODO!</button>
    </form>
  );
}

export default AddTodoForm;
