import { useState, useEffect } from "react";

import { List } from "./UserList.styled";
import { UserCard } from "../UserCard/UserCard";
import data from '../../data/users.json';

export const UserList = () => {

const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) ?? data
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleButton = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isFollow: user.isFollow ? false : true,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
          };
        }
        return user;
      })
    );
  };

  return (
    <List>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} onClick={handleButton}   />;
      })}
    </List>
  );
};
