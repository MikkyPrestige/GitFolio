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
  const [ githubList, setGithubList ] = useState([]);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setGithubList((prev) => {
      return [...prev, inputs.github];
    })
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
          onChange={updateForm}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {githubList.map((githubUser) => (
          <li key={githubUser}>
            <a href={`https://github.com/users/${githubUser}/repos`}
              target="_blank"
              rel="noreferrer"
            >
              {githubUser}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;