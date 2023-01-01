import { useState } from "react";
import useForm from "../hooks/useForm";

const Users = () => {
  const [githubUser, setGithubUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1)

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputs.github}`
      );
      const data = await response.json();
      setGithubUser(data);
      setLoading(false);
      resetForm();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No user Found</p>;

  return (
    <div className="searchUser">
      <h1 className="searchUser--heading">Search Github User</h1>
      <form onSubmit={handleSubmit} className="searchUser--form">
        <input
          type="text"
          name="github"
          value={inputs.github}
          onChange={updateForm}
          placeholder="Enter Github Username"
          className="searchUser--input"
        />
        <button className="searchUser--btn">Search</button>
      </form>
      <div className="searchUser--container">
        <div className="searchUser--container__user">
          <img
            src={githubUser.avatar_url}
            alt={githubUser.name}
            className="searchUser--container__user--img"
          />
          <h2 className="searchUser--container__user--name">{githubUser.name}</h2>
          <p className="searchUser--container__user--bio">{githubUser.bio}</p>
          <p className="searchUser--container__user--location">
            {githubUser.location}
          </p>
          </div>
          <div className="searchUser--container__repos">
            <h2 className="searchUser--container__repos--heading">Repositories</h2>
            <div className="searchUser--container__repos--container">
              <div className="searchUser--container__repos--container__repo">
                <h3 className="searchUser--container__repos--container__repo--name">Repo 1</h3>
                <p className="searchUser--container__repos--container__repo--desc">Repo 1 Description</p>
              </div>
              <div className="searchUser--container__repos--container__repo">
                <h3 className="searchUser--container__repos--container__repo--name">Repo 2</h3>
                <p className="searchUser--container__repos--container__repo--desc">Repo 2 Description</p>
              </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Users;
