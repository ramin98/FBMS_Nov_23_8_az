import { useSelector } from "react-redux";

function CompletedList() {
  let completedListArray = useSelector((state) => state.completedList.completedListArray);

  return (
    <div>
      <h1>Completed List</h1>
      <ul>
        {completedListArray.map((item) => {
          return (
            <li style={{textDecoration: item.completed ? 'line-through' : 'none'}} key={item.id}>
              <p>{item.todo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
  }
  
  export default CompletedList
  