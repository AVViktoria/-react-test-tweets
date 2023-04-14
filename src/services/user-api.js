// import axios from "axios";

// export const fetchUsers = async (query, page) => {
//   const BASE_URL = "https://64384df81b9a7dd5c94e9cdc.mockapi.io";
//   const response = await axios.get(`${BASE_URL}`);
//   console.log(response.data);
// };
const URL = "https://64384df81b9a7dd5c94e9cdc.mockapi.io";
function fetchUsers(query, page = 1) {
  return fetch(`${URL}?q=${query}&page=${page}`).then((response) =>
    console.log(response.json())
  );
}

export default fetchUsers;
