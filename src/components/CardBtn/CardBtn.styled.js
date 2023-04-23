import styled from "styled-components";

export const CardButton = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 196px;
  padding: 14px 56px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: ${(props) => (props.isFollow ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
