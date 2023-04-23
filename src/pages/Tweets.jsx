import React, { useState, useEffect } from "react";
import { UserList } from "../components/UserList/UserList";
import { Container } from "../components/SharedLayout/SharedLayout.styled";
import { BackBtn } from "../components/BackBtn/BackBtn";
import { LoadMoreBtn } from "../components/LoadMoreBtn/LoadMoreBtn";

import { fetchUsers } from "../services/API";
import { LIMIT_CARDS } from "../utils/constants";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isHasUsers, setIsHasUsers] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLoadMore = () => setPage((prevPage) => prevPage + 1);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetchUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...response.data]);

        if (response.data.length < LIMIT_CARDS) {
          setIsHasUsers(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  return (
    <Container>
      <BackBtn />
      <UserList users={users} />
      {isHasUsers === true && users.length > 0 && (
        <LoadMoreBtn
          disabled={!isHasUsers}
          onLoadMore={onLoadMore}
          loading={loading}
        />
      )}
    </Container>
  );
};
export default Tweets;
