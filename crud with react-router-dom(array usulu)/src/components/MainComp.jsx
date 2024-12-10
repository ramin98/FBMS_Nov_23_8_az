import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function MainComp() {
  let [bag, setBag] = useState([]);

  return (
    <MainTag>
      <Outlet context={{bag, setBag}}/>
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
