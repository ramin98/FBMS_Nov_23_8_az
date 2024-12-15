import { createContext, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import { initialObjectProducts, reducerProdcuts } from "./reducers/reducerProducts";

export const MyContext = createContext()

function App() {
 
  let [productsState, productsDispatch] = useReducer(reducerProdcuts, initialObjectProducts)

  return (
    <MyContext.Provider value={{productsState, productsDispatch}}>
      <Header/>
      <MainComponent/>
      <Footer/>
    </MyContext.Provider>
  );
}

export default App;
