import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [users, setUsers] = useState([]);
  let [flag, setFlag] = useState(false);
  let [count, setCount] = useState(0);

  function addUser() {
    let newArr = [...users];
    newArr.push({ name: "asd", username: "asdasd", email: "asd" });
    setUsers(newArr);
  }

  // useEffect(() => {
  //   async function getUsers() {
  //     let res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     let data = await res.json();
  //     setUsers(data);
  //     console.log(users)
  //   }

  //   getUsers()
  // }, [flag])

  useEffect(() => {
    let timer;
    if (flag) {
      timer = setInterval(() => {
        setCount((value) => value + 1);
        console.log(count);
      }, 1000);
      console.log(timer)
    }

    return () => {
      console.log(timer);
      console.log('test')
      clearInterval(timer);
    };
  }, [flag]);

  useEffect(() => {
    function getKey(ev) {
      console.log(ev.key);
    }

    document.addEventListener("keydown", getKey);

    
    return () => {
      document.removeEventListener("keydown", getKey);
    };
  }, [flag]);

  return (
    <>
      <button onClick={() => setFlag(!flag)}>{flag ? "STOP" : "PLAY"}</button>
      <p>{count}</p>
      <button onClick={() => setFlag(!flag)}>UPDATE USEEFFECT</button>
      <button onClick={addUser}>ADD</button>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.username}</p>
              <p>{item.email}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
