import axios from "axios";
import { UserProfileToken } from "../Models/User";
import { handleError } from "../../src/Helpers/ErrorHandler";

const api = "http://localhost:5000/api";

export const loginAPI = async (username: string, password: string) => {
    try {
      const data = await axios.post<UserProfileToken>(api + "account/login", {
        username: username,
        password: password,
      });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const registerAPI = async (email: string, password: string) => {
    try {
      const data = await axios.post<UserProfileToken>(api + "account/register", {
        email: email,
        password: password,
      });
        return data;
    } catch (error) {
        handleError(error);
    }
};