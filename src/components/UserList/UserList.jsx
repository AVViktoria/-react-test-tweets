import PropTypes from "prop-types";
import { List } from "./UserList.styled";
import { UserCard } from "../UserCard/UserCard";
// import data from '../../data/users.json';
export const UserList = ({ users }) => {
  return (
    <>
      <List>
        {users.map(({ user, tweets, id, followers, avatar }) => (
          <UserCard
            key={id}
            id={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </List>
    </>
  );
};

UserList.prototype = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      followers: PropTypes.number,
    })
  ).isRequired,
};
