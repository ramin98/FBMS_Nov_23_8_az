import styled from "styled-components";
import ServicesItem from "./ServicesItem";
import { services } from "../../assets/data";

function Services() {
  const sendFunc = (text) => {
    console.log(text);
  };

  return (
    <ServicesSection>
      <button onClick={(ev) => sendFunc(ev.target)}>SEND</button>
      <HeaderTag>Services</HeaderTag>
      <ServicesList>
        {/* <ServicesItem servicesName="Services 1" servicesDescription="Description 1"/> */}
        {/* <ServicesItem servicesName="Services 2" servicesDescription="Description 2"/> */}
        {/* <ServicesItem servicesName="Services 3" servicesDescription="Description 3"/> */}
        {/* <ServicesItem servicesName="Services 4" servicesDescription="Description 4"/> */}
        {/* <ServicesItem servicesName="Services 5" servicesDescription="Description 5"/> */}
        {/* <ServicesItem servicesName="Services 6" servicesDescription="Description 6"/> */}
        {/* <ServicesItem servicesName="Services 7" servicesDescription="Description 7"/> */}
        {/* <ServicesItem servicesName="Services 8" servicesDescription="Description 8"/> */}
        {/* <ServicesItem servicesName="Services 9" servicesDescription="Description 9"/> */}
        {services.map((item, index) => (
          <ServicesItem
            key={index}
            servicesName={item.servicesName}
            servicesDescription={item.servicesDescription}
          />
        ))}
      </ServicesList>
    </ServicesSection>
  );
}

export default Services;

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
