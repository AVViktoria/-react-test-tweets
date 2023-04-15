import PropTypes from 'prop-types';

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
  Button
} from "../UserCard/UserCard.styled";

//    images
import logo from "../../images/logo.svg";
import headerDecor from "../../images/headerDecor.png";

export const UserCard = ({user, onClick}) => {
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
            <ImgAvatar src={user.avatar} alt="avatar image" />
          </CardAvatar>
          <UserInfo>
            <UserText> { user.tweets} TWEETS</UserText>
            <UserText> {Intl.NumberFormat("en-US").format(user.followers)} FOLLOWERS</UserText>
        
          </UserInfo>
          <Button onClick={() => onClick(user.id)} isFollow={user.isFollow}>
        {user.isFollow ? "Following" : "Follow"}
      </Button>
        </CardMain>
      </CardContainer>
    </>
  );
};


UserCard.prototype = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      tweets: PropTypes.number,
      followers: PropTypes.number,
    })
  ).isRequired,
   openClick: PropTypes.func.isRequired,
};