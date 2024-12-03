import styled from "styled-components";
import styles from "../../App.module.css";
import styles2 from "../../style.module.css";

function ServicesItem(props) {
  console.log(styles)
  console.log(styles2)
  return (
    <ServicesLi>
      <ServicesName>{props.servicesName}</ServicesName>
      <ServicesDescription color='red'>
        {props.servicesDescription}
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

const ServicesDescription = styled.p` 
  color:${(props) => props.color};
`;
