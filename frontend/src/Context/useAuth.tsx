import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }

    setIsReady(true);
  }, []);

  // ✅ REGISTER NORMAL (se quiser usar depois)
  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const res = await registerAPI(email, username, password);

      if (!res?.data) return;

      const userObj: UserProfile = {
        userName: res.data.username,
        email: res.data.email,
        token: res.data.token,
      };

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(userObj));

      setToken(res.data.token);
      setUser(userObj);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;

      toast.success("Registro realizado!");
      navigate("/search");
    } catch {
      toast.warning("Erro no registro");
    }
  };

  // 🔥🔥🔥 FAKE LOGIN (GARANTIDO)
  const loginUser = (username: string, password: string) => {
    const fakeUser: UserProfile = {
      userName: username,
      email: "fake@email.com",
      token: "fake-token",
    };

    localStorage.setItem("token", fakeUser.token);
    localStorage.setItem("user", JSON.stringify(fakeUser));

    setToken(fakeUser.token);
    setUser(fakeUser);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${fakeUser.token}`;

    toast.success("Login fake realizado!");
    navigate("/search");
  };

  const isLoggedIn = () => !!token;

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);