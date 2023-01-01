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

const Users = () => {
  const { inputs, handleChange, resetForm } = useForm({
    github: "",
  });

  const [ githubList, setGithubList ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGithubList([
      ...githubList,
      inputs.github,
    ]);
    resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="github"
          type="text"
          name="github"
          value={inputs.github}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {githubList.map((github) => (
          <li key={github}>
            <a href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              {username}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;