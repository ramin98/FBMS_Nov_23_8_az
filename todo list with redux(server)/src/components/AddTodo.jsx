import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToListFetch } from "../store/slices/todoList/todoListFetchs";

function AddTodoForm() {
  //   let [value, setValue] = useState("");
  let inputValue = useRef(null);

  let dispatch = useDispatch();

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        dispatch(addToListFetch(inputValue.current.value));
      }}
    >
      <input ref={inputValue} type="text" placeholder="WRITE TODO!" name="todo" />
      <button>ADD TODO!</button>
    </form>
  );
}

export default AddTodoForm;
