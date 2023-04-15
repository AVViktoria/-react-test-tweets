import { React, Component } from "react";
import { UserList } from "./components/UserList/UserList.jsx";

export class App extends Component {
  state = {
    users: [],
    page: 1,
    query: "",
    isLoading: false,
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { users } = this.state;
    return <div>{users && <UserList users={users} />}</div>;
  }
}

//*   doesn't work, have some mistake, leave for future

// addUsers = async (query, page) => {
//   try {
//     this.setState({
//       isLoading: true,
//     });
//     this.setState((prevState) => ({
//       users: [...prevState.users, ...users],
//       isLoading: false,
//     }));
//     // if (users.length === 0) {
//     //   alert("Sorry, we  find nothing for your request.");
//     // }
//   } catch (error) {
//     this.setState({
//       error: error.message,
//     });
//   } finally {
//     this.setState({
//       isLoading: false,
//     });
//   }
// };
// componentDidUpdate(_, prevState) {
//   if (
//     prevState.page !== this.state.page ||
//     prevState.query !== this.state.query
//   ) {
//     fetchUsers(this.state.query, this.state.page).then((users) => {
//       this.setState((prevState) => ({
//         users: [...prevState.users, ...users],
//       }));
//     });
//   }
// }

//       IMPORTS
// import { Loader } from "./components/Loader/Loader.jsx";
// import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
// import cards from "./data/users.json";
// import fetchUsers from "./services/user-api";

//     RENDER
//  {isLoading && <Loader />}
// {
//   users.length >= 12 && (
//           <LoadMoreBtn onClickFn={this.handleLoadMore} isLoading={isLoading} />
//         )}
