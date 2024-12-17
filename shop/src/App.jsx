import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import {
  initialObjectProducts,
  reducerProdcuts,
} from "./reducers/products/reducerProducts";
import { initialObjectBag, reducerBag } from "./reducers/bag/reducerBag";

export const MyContext = createContext();

function App() {
  let [productsState, productsDispatch] = useReducer(
    reducerProdcuts,
    initialObjectProducts
  );
  let [bagState, bagDispatch] = useReducer(reducerBag, initialObjectBag);

  useEffect(() => {
     if(!localStorage.getItem('bag')){
      localStorage.setItem('bag' , JSON.stringify([]))
     }
  },[])

  return (
    <MyContext.Provider
      value={{ productsState, productsDispatch, bagState, bagDispatch }}
    >
      <Header />
      <MainComponent />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
