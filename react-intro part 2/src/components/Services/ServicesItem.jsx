import styled from "styled-components";

function ServicesItem({servicesName, servicesDescription}) {
  return (
    <ServicesLi>
      <ServicesName>{servicesName}</ServicesName>
      <ServicesDescription>
        {servicesDescription}
      </ServicesDescription>
    </ServicesLi>
  );
}

export default ServicesItem;

const ServicesLi = styled.li`
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color:black;
  text-align:left;
`;

const ServicesName = styled.h3``;

const ServicesDescription = styled.p``;
