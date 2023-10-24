import axios from "axios";
const BASE_URL = "http://localhost:3000/api/users";

async function loginUser(userdetails) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userdetails);
    const token = response.data.token;

    if (token) {
      localStorage.setItem("usertoken", token); // Tallennetaan token paikalliseen tallennustilaan
      return { success: true };
    }
  } catch (error) {
    console.error("Login failed", error);
    return { success: false, error };
  }
}

async function getUsers() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Cant get userdetails: ", error);
  }
}

export { getUsers, loginUser };
