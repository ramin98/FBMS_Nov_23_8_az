import styled from "styled-components";
import ServicesPage from "./Pages/ServicesPage";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Bag from "./Pages/Bag";
import { useState } from "react";
import ServicePage from "./Pages/ServicePage";
import ServiceName from "./Pages/ServiceName";
import ServiceDescription from "./Pages/ServiceDescription";

function MainComp() {
  let [bag, setBag] = useState([]);

  return (
    <MainTag>
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/services"
          element={<ServicesPage bag={bag} setBag={setBag} />}
        />
        <Route path="/bag" element={<Bag bag={bag} />} />
        <Route path="service-page/:serviceId" element={<ServicePage />}>
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
