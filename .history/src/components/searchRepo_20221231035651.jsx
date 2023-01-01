import { useState } from "react";
import useForm from "../hooks/useForm";
import Pagination from "./pagination";
import "../assets/styles/searchRepo.css";

const Users = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.github.com/users/${inputs.github}/repos?per_page=50`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    resetForm();
  };

  const indexOfLastUser = currentPage * reposPerPage;
  const indexOfFirstUser = indexOfLastUser - reposPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  // localStorage.setItem('gitHub', JSON.stringify(currentUsers));

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(user.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // GET STORAGE
  // const getStorage = () => {
  //   const storage = localStorage.getItem('gitHub');
  //   if (storage) {
  //     setUser(JSON.parse(storage));
  //   }
  // };
  // const storage = localStorage.getItem("gitHub");
  // setUser(storage)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

  return (
    <div className="searchRepo">
      <h1 className="searchRepo--heading">Explore other Github users repository</h1>
      <form className="searchRepo--form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="github"
          placeholder="Enter Github Username"
          value={inputs.github}
          onChange={updateForm}
          className="searchRepo--form__input"
        />
        <button type="submit" className="searchRepo--form__btn">Search</button>
      </form>
      <div className="searchRepo--results">
        <ul className="searchRepo--lists">
          <h2 className="searchRepo--lists__heading"><span>{user.length}</span> Repositories found</h2>
          {currentUsers.map((user) => {
            const { name, html_url, description, avatar_url, twitter_username, location } = user;
            return (
              <li key={user.id} className="searchRepo--list">
                <div className="searchRepo--list__img">
                  <img src={avatar_url} alt={name} />
                </div>
                <div className="searchRepo--list__info">
                  <h3 className="searchRepo--list__item">{name}</h3>
                  <p className="searchRepo--list__item">{description}</p>
                  <p className="searchRepo--list__item">{twitter_username}</p>
                  <p className="searchRepo--list__item">{location}</p>
                <a href={html_url} target='_blank' rel="noreferrer" className="searchRepo--link">
                  Open in Github
                </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pagination">
        <Pagination reposPerPage={reposPerPage} totalRepos={user.length} paginate={paginate} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Users;
