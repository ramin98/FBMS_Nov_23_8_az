import styled from "styled-components";
import ServicesPage from "./Pages/ServicesPage";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Bag from "./Pages/Bag";

function MainComp() {
   
    return (
        <MainTag>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/bag" element={<Bag/>}/>
          </Routes>
        </MainTag>
    )
}

export default MainComp

const MainTag = styled.main`
  padding: 50px;
  text-align: center;
`;

const HeaderTag = styled.h1`
  color: red;
  font-size: 60px;
  font-weight: 900;
`;