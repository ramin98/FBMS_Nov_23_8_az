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
import {
  initialObjectOrders,
  reducerOrders,
} from "./reducers/orders/reducerOrders";
import {
  initialObjectAdmin,
  reducerAdmin,
} from "./reducers/admin/reducerAdmin";

export const MyContext = createContext();

function App() {
  let [productsState, productsDispatch] = useReducer(
    reducerProdcuts,
    initialObjectProducts
  );
  let [bagState, bagDispatch] = useReducer(reducerBag, initialObjectBag);
  let [orderState, orderDispatch] = useReducer(
    reducerOrders,
    initialObjectOrders
  );

  let [adminState, adminDispatch] = useReducer(
    reducerAdmin,
    initialObjectAdmin
  );

  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        productsState,
        productsDispatch,
        bagState,
        bagDispatch,
        orderState,
        orderDispatch,
        adminState,
        adminDispatch,
      }}
    >
      <Header />
      <MainComponent />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
