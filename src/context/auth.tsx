import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { IUser } from "../types/user";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();

  const handleLogin = async (LoginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `/users?email=${LoginData.email}&password=${LoginData.password}`
      );
      console.log(data[1]);

      if (data.length && data[0].id) {
        setUser(data[0]);
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleSignOut = () => {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
