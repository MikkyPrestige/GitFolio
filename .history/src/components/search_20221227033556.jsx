import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

export const UserContext = createContext();

export default function UserContextProvider({ children }) = {
  const [ githubList, setGithubList ] = useState([]);

  return (
    <UserContext.Provider value={{ githubList, setGithubList }}>
      {children}
    </UserContext.Provider>
  );
}
