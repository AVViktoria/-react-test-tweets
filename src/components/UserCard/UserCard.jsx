// import PropTypes from 'prop-types';
//   components
import { Button } from "../Button/Button";
//    styled-components
import {
  CardContainer,
  CardHeader,
  Logo,
  CardDecor,
  ImgDecor,
  CardMain,
  CardAvatar,
  ImgAvatar,
  UserInfo,
  UserText,
} from "../UserCard/UserCard.styled";

//    images
import logo from "../../images/logo.svg";
import headerDecor from "../../images/headerDecor.png";
import avatar from "../../images/avatar.svg";

export const UserCard = ({ user, onClick }) => {
  return (
    <>
      <CardContainer>
        <CardHeader>
          <Logo src={logo} alt="Logo GOIT" />
          <CardDecor>
            <ImgDecor src={headerDecor} alt="check mark and question mark" />
          </CardDecor>
        </CardHeader>
        <CardMain>
          <CardAvatar>
            <ImgAvatar src={avatar} alt="avatar image" />
          </CardAvatar>
          <UserInfo>
            <UserText> TWEETS</UserText>
            <UserText> FOLLOWERS</UserText>
          </UserInfo>
          <Button user={user} onClick={onClick} />
        </CardMain>
      </CardContainer>
    </>
  );
};
