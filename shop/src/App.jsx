import { createContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";


export const MyContext = createContext();

function App() {
  
  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
