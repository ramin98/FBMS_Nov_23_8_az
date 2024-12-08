import styled from "styled-components";
import ServicesItem from "./ServicesItem";
import { useState } from "react";

function Services({ servicesArray, setServicesArray }) {
  let [value, setValue] = useState("");

  let filteredArray = servicesArray.filter((item) =>
    item.servicesName.startsWith(value)
  );

  return (
    <ServicesSection>
      <input type="text" onInput={(ev) => setValue(ev.target.value)} />
      <HeaderTag>Services</HeaderTag>
      <ServicesList>
        {filteredArray.map((item) => (
          <ServicesItem
            key={item.id}
            servicesArray={servicesArray}
            setServicesArray={setServicesArray}
            obj={item}
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
