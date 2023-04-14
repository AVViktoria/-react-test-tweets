import { React, Component } from "react";
// import cards from "./data/users.json";
import fetchUsers from "./services/user-api";
import { UserList } from "./components/UserList/UserList.jsx";
import { Loader } from "./components/Loader/Loader.jsx";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn.jsx";

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
  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      fetchUsers(this.state.query, this.state.page).then((users) => {
        this.setState((prevState) => ({
          users: [...prevState.users, ...users],
        }));
      });
    }
  }
  render() {
    const { users, isLoading } = this.state;
    return (
      <div>
        {users.length >= 1 && <UserList users={users} />}
        {users.length >= 12 && (
          <LoadMoreBtn onClickFn={this.handleLoadMore} isLoading={isLoading} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}
