import { useState } from "react";
import useForm from "../hooks/useForm";

const Users = () => {
  const [githubUser, setGithubUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (inputs.github === "") {
      return <p>Enter username</p>
    }
    fetch(`https://api.github.com/users/${inputs.github}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setGithubUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    resetForm();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

  return (
    <div className="searchUser">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="github"
          value={inputs.github}
          onChange={updateForm}
          placeholder="Enter Github username"
        />
        <button type="submit">Search</button>
      </form>
      <div className="searchUser--container">
        {githubUser.map((user) => {
          const { id, name, description, } = user;
          return (
            <div key={id} className="searchUser--container__card">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>
                <a href="{html_url}" tarqet="_blank" rel="noreferrer">
                  Open in Github
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
