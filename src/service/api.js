import axios from "axios";

const URL = "http://localhost:8000";

export const authenticateUserSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.error(" Error in signup API", error.message);
  }
};
