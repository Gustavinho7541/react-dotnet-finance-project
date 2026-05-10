import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { UserProfile } from "../../src/Models/User";
import { useNavigate } from "react-router-dom";
import { registerAPI, loginAPI } from "../Services/AuthService";
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

  // 🔥 Carregar dados do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);

      // ✅ Corrigido Authorization
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
    }

    setIsReady(true);
  }, []);

  // 🔥 REGISTER
  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const res = await registerAPI(email, password);

      if (res) {
        const userObj: UserProfile = {
          userName: res.data.UserName,
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

        toast.success("Registro realizado com sucesso!");
        navigate("/search");
      }
    } catch (e) {
      toast.warning("Erro no servidor. Tente novamente.");
    }
  };

  // 🔥 LOGIN
  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);

      if (res) {
        const userObj: UserProfile = {
          userName: res.data.UserName,
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

        toast.success("Login realizado com sucesso!");
        navigate("/search");
      }
    } catch (e) {
      toast.warning("Erro no login. Verifique suas credenciais.");
    }
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);

    delete axios.defaults.headers.common["Authorization"];

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

// 🔥 Hook customizado
export const useAuth = () => React.useContext(UserContext);