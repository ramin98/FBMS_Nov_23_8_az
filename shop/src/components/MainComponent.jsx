import { Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import BagPage from "./Pages/BagPage";
import AdminPage from "./Pages/AdminPage";

function MainComponent() {
    return (
      <main>
        <Routes>
            <Route path='/' element={<ProductsPage/>}/>
            <Route path='/bag' element={<BagPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </main>
    );
  }
  
  export default MainComponent;
  