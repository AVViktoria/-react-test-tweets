// import PropTypes from 'prop-types';
//   components
import { Button } from "../Button/Button";

//    styled-components

import {
  CardContainer,
  CardHeader,
  Logo,
  Decoration,
  CardAvatar,
  UserInfo,
  Tweets,
  Followers,
} from "../UserCard/UserCard.styled";

//    images
import logo from "../../images/logo.svg";
// import headerDecor from "../../images/headerDecor.png"

export const UserCard = ({ user, onClick }) => {
  return (
    <>
      <CardContainer>
        <CardHeader>
          <Logo src={logo} alt="Logo GOIT" />
          <Decoration>
            {/* <ImgDecor src={headerDecor} alt = "check mark and question mark"/> */}
          </Decoration>
        </CardHeader>
        <CardAvatar>
          {/* <Avatar src={user.avatar} alt = "avatar image"/> */}
        </CardAvatar>
        <UserInfo>
          <Tweets> TWEETS</Tweets>
          <Followers> FOLLOWERS</Followers>
        </UserInfo>
        <Button user={user} onClick={onClick} />
      </CardContainer>
    </>
  );
};
