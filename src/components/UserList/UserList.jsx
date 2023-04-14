import { List } from "./UserList.styled";
import { UserCard } from "../UserCard/UserCard";
import users from '../../data/users.json';

export const UserList = () => {
  return (
    <List>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </List>
  );
};
