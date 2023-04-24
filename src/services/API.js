import axios from "axios";

//  constants
import { LIMIT_CARDS } from "../utils/constants";
import { BASE_URL } from "../utils/constants";

// get users from mockapi.io
export const fetchUsers = async (currentPage) => {
  try {
    const response = await axios.get(
      `${BASE_URL}tweets?limit=${LIMIT_CARDS}&page=${currentPage}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
};

// export const updateFollowers = async (userId, newFollowers) => {
//   try {
//     const { data } = await axios.put(`/tweets/${userId}`, {
//       followers: newFollowers,
//     });

//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const updateFollowers = async (userId, newFollowers) => {
  try {
    await axios.put(`/${userId}`, {
      followers: newFollowers,
    });
  } catch (error) {
    console.error("Error updating followers:", error.message);
  }
};

// const URL = "https://64384df81b9a7dd5c94e9cdc.mockapi.io/api/";
// function fetchUsers() {
//   return fetch(`${URL}/tweets?limit=12&p=1`).then((response) =>
//     response.json()
//   );
// }

// export default fetchUsers;
// https://64384df81b9a7dd5c94e9cdc.mockapi.io/api/tweets?limit=12&p=1
