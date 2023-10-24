import axios from "axios";
const token = localStorage.getItem("usertoken");

const instance = axios.create({
  baseURL: "http://localhost:3000/api/users",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

async function loginUser(userdetails) {
  try {
    const response = await instance.post("/login", userdetails);
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

async function getUser() {
  try {
    const response = await instance.get("/me");
    return response.data;
  } catch (error) {
    console.error("Cant get userdetails: ", error);
  }
}

export { getUser, loginUser };
