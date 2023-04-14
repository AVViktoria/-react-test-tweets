// import axios from "axios";

// export const fetchUsers = async (page, query) => {
//   const BASE_URL = "https://64384df81b9a7dd5c94e9cdc.mockapi.io/api/";
//   const response = await axios.get(`${BASE_URL}tweets?limit=12&p=1`);
//   return response.data;
// };

const URL = "https://64384df81b9a7dd5c94e9cdc.mockapi.io/api/";
function fetchUsers() {
  return fetch(`${URL}/tweets?limit=12&p=1`).then((response) =>
    response.json()
  );
}

export default fetchUsers;
