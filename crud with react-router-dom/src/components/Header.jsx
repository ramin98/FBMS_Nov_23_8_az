import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <MainHeaderTag>
            <HeaderTag>HEADER</HeaderTag>
            <ul>
              <li><Link to='/services'>SERVICES</Link></li>
              <li><Link to='/bag'>BAG</Link></li>
              <li><Link to='/'>ABOUT</Link></li>
            </ul>
        </MainHeaderTag>
    )
}

export default Header

const MainHeaderTag = styled.header`
  padding: 50px;
  background-color: black;
  color: black;
  text-align: center;
`;

const HeaderTag = styled.h1`
  color: red;
  font-size: 60px;
  font-weight: 900;
`;