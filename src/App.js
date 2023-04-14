import user from "./data/user.json";

import { UserCard } from "../src/components/UserCard/UserCard";
function App() {
  return (
    <>
      <div>
        <UserCard
          user={user.name}
          tweets={user.tweets}
          followers={user.followers}
          avatar={user.avatar}
          id={user.id}
        />
      </div>
    </>
  );
}

export default App;
