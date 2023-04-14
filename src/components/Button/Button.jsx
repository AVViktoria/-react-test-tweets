// import PropTypes from 'prop-types';
import {ButtonFollow} from "./Button.styled";

export const Button = ({user, onClick}) => {
  return (
    <ButtonFollow type="button" onClick={() => onClick(user.id)}>FOLLOW</ButtonFollow>
  )
};