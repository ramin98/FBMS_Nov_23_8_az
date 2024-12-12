import styled from "styled-components";
import BagItem from "./BagItem";
import { useContext } from "react"
import { MyContext } from "../../App";


function BagList() {

  let {bagState} = useContext(MyContext)

  return (
    <ServicesSection>
      <ServicesList>
        {bagState.bag.map((item) => (
          <BagItem
            key={item.id}
            obj={item}
          />
        ))}
      </ServicesList>
    </ServicesSection>
  );
}

export default BagList;

const ServicesSection = styled.section`
  margin-top: 30px;
`;

const HeaderTag = styled.h1``;

const ServicesList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 30px;
  gap: 30px 30px;

  @media (max-width: 630px) {
    & {
      grid-template-columns: auto;
    }
  }
`;
