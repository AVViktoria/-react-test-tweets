import React, {useState, useEffect} from 'react';
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
  // Button
} from "../UserCard/UserCard.styled";
import { CardBtn } from '../CardBtn/CardBtn';
import {updateFollowers} from "../../services/API"
//    images
import logo from "../../images/logo.svg";
import headerDecor from "../../images/headerDecor.png";

export const UserCard = ({tweets, id, followers, avatar}) => {
  const [isFollow, setIsFollow] = useState(false);
  const [followCount, setFollowCount] = useState(followers);

 useEffect(() => {
    const following = localStorage.getItem(`following_${id}`);
    if (following !== null) {
      setIsFollow(following === 'true');
    }
  }, [id]);

  // const onFollowBtnClick = () => {
  //   setIsFollow(!isFollow);
  //   const newFollowerCount = isFollow ?
  //     setFollowCount((prevCount) => prevCount - 1)
  //     : setFollowCount((prevCount) => prevCount + 1);
    
  //   await updateFollower(id, newFollowerCount);
  //   setFollowCount(newFollowerCount);
  //   localStorage.setItem(`following_${id}`, !isFollow);
  // };
  const onFollowBtnClick = async () => {
    setIsFollow(!isFollow);
    const newFollowerCount = isFollow
      ? followCount - 1
      : followCount + 1;
    await updateFollowers(id, newFollowerCount);
    setFollowCount(newFollowerCount);
    localStorage.setItem(`following_${id}`, !isFollow);
  };


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
            <UserText> { tweets} TWEETS</UserText>
            <UserText>    {Intl.NumberFormat("en-US").format(followCount)} FOLLOWERS</UserText>
     {/* {followCount.toLocaleString('en-US')} */}
          </UserInfo>
          <CardBtn text={isFollow ? "Following" :"Follow"} onClick={onFollowBtnClick} isFollow={isFollow}></CardBtn>
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