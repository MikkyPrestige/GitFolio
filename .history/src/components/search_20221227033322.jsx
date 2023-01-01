import { createContext } from "react";
import useForm from "../hooks/useForm";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [ githubList, setGithubList ] = ();