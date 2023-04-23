import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: 1280px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
export const Nav = styled.div`
  display: flex;
  margin: 0 auto;
`;
export const StyledLinkBtn1 = styled(NavLink)`
  display: block;

  margin-bottom: 20px;
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
export const StyledLinkBtn2 = styled(NavLink)`
  display: block;
  margin-left: 80px;
  margin-bottom: 20px;
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
