import { useState } from "react";
import "./App.css";

function App() {
  // const [login, setLogin] = useState("");
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
    const [inputs, setInputs] = useState({login:'', name:'', surname:'', email:'', password:''});


  // let login = "";
  // let name = "";
  // let surname = "";
  // let email = "";
  // let password = "";
  // let active = true
  // const [active, setActive] = useState(true);
  let arr = [1,2,3,4]
  let arr2 = [...arr, 5]

  const handleInputsValue = (ev) => {
    setInputs({...inputs, [ev.target.name]:ev.target.value})
    console.log(inputs)
    checkValues();
  };

  // const handleLoginValue = (ev) => {
  //   setLogin(ev.target.value);
  //   // login = ev.target.value;
  //   console.log(ev.target.value, "just");
  //   console.log(login, "state");
  //   checkValues();
  // };

  // const handleNameValue = (ev) => {
  //   setName(ev.target.value);
  //   // name = ev.target.value;
  //   console.log(name);
  //   checkValues();
  // };

  // const handleSurnameValue = (ev) => {
  //   setSurname(ev.target.value);
  //   // surname = ev.target.value;
  //   console.log(surname);
  //   checkValues();
  // };

  // const handlePasswordValue = (ev) => {
  //   setPassword(ev.target.value);
  //   // password = ev.target.value;

  //   console.log(password);
  //   checkValues();
  // };

  // const handleEmailValue = (ev) => {
  //   setEmail(ev.target.value);
  //   // email = ev.target.value;
  //   console.log(email);
  //   checkValues();
  // };

  const checkValues = () => {
    if (
      inputs.login.length >= 8 &&
      inputs.name.length >= 8 &&
      inputs.surname.length >= 8 &&
      inputs.email.length >= 8 &&
      inputs.password.length >= 8
    ) {
      console.log(true);
      // active = false
      // setActive(false);
      return false
    } else {
      // setActive(true);
      return true
    }
  };

  let active = checkValues()

  return (
    <>
      <form>
        <input
          onChange={handleInputsValue}
          type="text"
          name="login"
          placeholder="login"
        />
        <input
          onChange={handleInputsValue}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={handleInputsValue}
          type="text"
          name="surname"
          placeholder="surname"
        />
        <input
          onChange={handleInputsValue}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={handleInputsValue}
          type="password"
          name="password"
          placeholder="password"
        />
        <button disabled={active}>REGISTER</button>
      </form>
      <p>{inputs.login}</p>
      <p>{inputs.name}</p>
      <p>{inputs.surname}</p>
      <p>{inputs.email}</p>
      <p>{inputs.password}</p>
    </>
  );
}

export default App;
