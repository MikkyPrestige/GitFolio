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
    resetForm();
  };

  const handleChange = (e) => {
    updateForm(e);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message === "Not Found"}</p>;

  return (
    <div>
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
      <div>
        <h2>{githubUser.name}</h2>
        <img src={githubUser.avatar_url} alt={githubUser.name} />
        <p>{githubUser.bio}</p>
      </div>
    </div>
  );
};

export default Users;
