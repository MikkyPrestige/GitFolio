import { createContext, useEffect, useState } from "react";
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
  const [ githubUser, setGithubUser ] = useState([]);
  const [ githubList, setGithubList ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    useEffect(() => {
      setLoading(true);
      fetch(`https://api.github.com/users/${inputs.github}`)
        .then((response) => response.json())
        .then((data) => {
          setGithubUser(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [inputs.github]);
    setGithubList([...githubList, inputs.github]);
    resetForm();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

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
      <div>
        <h2>{githubUser.login}</h2>
        <img src={githubUser.avatar_url} alt={githubUser.login} />
      </div>
    </>
  );
}

export default Users;