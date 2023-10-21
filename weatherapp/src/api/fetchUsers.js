import axios from "axios";
const BASE_URL = "http://localhost:3000/api/users";

async function fetchUser() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Cant get userdetails: ", error);
  }
}

export {fetchUser}