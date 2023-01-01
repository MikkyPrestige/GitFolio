import { createContext, useState } from "react";
import useForm from "../hooks/useForm";

// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [ githubList, setGithubList ] = useState([]);

//   return (
//     <UserContext.Provider value={{ githubList, setGithubList }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// const Form = ({ handleSubmit, handleChange, inputs }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         id="github"
//         type="text"
//         name="github"
//         value={inputs.github}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

