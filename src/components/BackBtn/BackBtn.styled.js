import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  max-width: 50px;
  padding: 12px 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background-color: rgb(194 204 229);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
