import { createContext, useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComp from "./components/MainComp";
import { services, usersArr } from "./assets/data";
import {
  initialObjectServices,
  reducerServices,
} from "./reducers/reducersState/reducerServices";
import { initialObjectBag, reducerBag } from "./reducers/reducersState/reducerBag";

export const MyContext = createContext();

function App() {
  let [users, setUsers] = useState(usersArr);

  let [servicesState, servicesDispatch] = useReducer(
    reducerServices,
    initialObjectServices
  );

  let [bagState, bagDispatch] = useReducer(
    reducerBag,
    initialObjectBag
  );

  return (
    <MyContext.Provider
      value={{
        servicesState,
        servicesDispatch,
        bagState, 
        bagDispatch,
        users,
      }}
    >
      <Header />
      <MainComp />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
