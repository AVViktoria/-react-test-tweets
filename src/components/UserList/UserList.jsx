import { List } from "./UserList.styled";
import { UserCard } from "../UserCard/UserCard";
import users from '../../data/users.json';

export const UserList = () => {
//   state = {
//     users: cards.map(card => {
//       return {
//       ...card, isFollowing: false
//     }
//   })
// }







  return (
    <List>
      {users.map((user) => {
        return <UserCard key={user.id} user={user}  />;
      })}
    </List>
  );
};
