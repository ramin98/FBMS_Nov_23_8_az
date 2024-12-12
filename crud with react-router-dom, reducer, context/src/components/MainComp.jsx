import styled from "styled-components";
import ServicesPage from "./Pages/ServicesPage";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Bag from "./Pages/Bag";
import ServicePage from "./Pages/Service/ServicePage";
import ServiceName from "./Pages/Service/ServiceName";
import ServiceDescription from "./Pages/Service/ServiceDescription";
import UserPage from "./Pages/UserPage";

function MainComp() {
  
return (
    <MainTag>
      <Routes>
        <Route path="about" element={<About/>} >
         <Route path="user-page/:id" element={<UserPage/>} />
        </Route>
        <Route
          path="/"
          element={<ServicesPage/>}
        />
        <Route path="/bag" element={<Bag/>} />
        <Route path="service-page/:serviceId" element={<ServicePage/>}>
          <Route path="service-name" element={<ServiceName  />} />
          <Route path="service-description" element={<ServiceDescription  />} />
        </Route>
      </Routes>
    </MainTag>
  );
}

export default MainComp;

const MainTag = styled.main`
  padding: 50px;
  text-align: center;
`;

const HeaderTag = styled.h1`
  color: red;
  font-size: 60px;
  font-weight: 900;
`;
