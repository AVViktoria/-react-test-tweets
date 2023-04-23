import styled from "styled-components";

export const CardContainer = styled.li`
  max-width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
export const CardHeader = styled.div`
  position: relative;
  padding-top: 28px;
  padding-bottom: 18px;
  padding-left: 36px;
  padding-right: 36px;
`;
export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;
export const CardDecor = styled.div`
  position: relative;
  max-width: 308px;
  height: 168px;
  margin-left: auto;
  margin-right: auto;
  fit-contain: cover;
`;
export const ImgDecor = styled.img``;
export const CardMain = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 36px;
  padding-top: 62px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const CardAvatar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  left: 50%;
  top: -43px;
  transform: translate(-50%, 0);
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const ImgAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;
  object-fit: cover;
`;
export const UserInfo = styled.ul``;
export const UserText = styled.li`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  &:first-child {
  }
  &:last-child {
    margin-top: 16px;
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
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
