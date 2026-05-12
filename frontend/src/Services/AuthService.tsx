import axios from "axios";
import { UserProfileToken } from "../Models/User";
import { handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:5081/api/";

// ✅ LOGIN
export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

// ✅ REGISTER
export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(
      api + "account/register",
      {
        email,
        username,
        password,
      }
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};