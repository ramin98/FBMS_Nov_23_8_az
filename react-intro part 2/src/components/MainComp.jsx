import styled from "styled-components";
import Services from "./Services/Services";

function MainComp() {
    return (
        <MainTag>
            <HeaderTag>MAIN</HeaderTag>
            <Services/>
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