import styled from "styled-components";
import BagItem from "./BagItem";

function BagList({ bag,setId }) {


  return (
    <ServicesSection>
      <ServicesList>
        {bag.map((item) => (
          <BagItem
            key={item.id}
            obj={item}
            setId={setId}
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
