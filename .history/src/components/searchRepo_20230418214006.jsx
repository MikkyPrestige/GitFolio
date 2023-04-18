import { useState } from "react";
import useForm from "../hooks/useForm";
import Pagination from "./pagination";
import "../assets/styles/searchRepo.css";
import { Back } from "../components";

const UserRepo = () => {
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
    // Check if the Github username is empty
    if (!inputs.github) {
      setError("Enter a GitHub username");
      setUser([]);
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/users/${inputs.github}/repos?per_page=50`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`No Repository Found for ${inputs.github}.`);
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
        setError(
          `Showing ${data.length} ${
            data.length > 1 ? "repositories" : "repository"
          } for ${inputs.github} `
        );
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setUser([]);
      });
    resetForm();
  };

  const indexOfLastUser = currentPage * reposPerPage;
  const indexOfFirstUser = indexOfLastUser - reposPerPage;
  const currentUsers =
    user.length > 0 ? user.slice(indexOfFirstUser, indexOfLastUser) : [];

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

  return (
    <>
      {loading ? (
        <p className="searchRepo--loading">Loading...</p>
      ) : (
        <div className="searchRepo--container">
          <div className="searchRepo">
            <h1 className="searchRepo--heading">
              Explore more Github repositories
            </h1>
            <form className="searchRepo--form" onSubmit={handleSubmit}>
              <div className="searchRepo--form__container">
                <input
                  type="text"
                  name="github"
                  placeholder="Enter Github Username"
                  value={inputs.github}
                  onChange={updateForm}
                  className="searchRepo--form__input"
                />
                {error && <p className="searchRepo--error">{error}</p>}
              </div>
              <button type="submit" className="searchRepo--form__btn">
                Search
              </button>
            </form>
            <div className="searchRepo--results">
              <ul className="searchRepo--lists">
                <h2 className="searchRepo--lists__heading">
                  {user.length > 0 ?
                    `${currentUsers.length} ${
                      currentUsers.length > 1 ? "repositories Found" : "repository"
                    }`
                    : ""}
                </h2>
                {currentUsers.map((user, index) => {
                  const { name, html_url, description, language, topics } =
                    user || [];
                  // add commmas to topics
                  const topicsComma =
                    topics && topics.length > 0 ? topics.join(", ") : "";
                  return (
                    <li key={index} className="searchRepo--list">
                      <h3 className="searchRepo--list__title">
                        <strong>Repository Name </strong>
                        {name}
                      </h3>
                      {description && (
                        <p className="searchRepo--list__content">
                          <strong>Repository Description </strong>
                          {description}
                        </p>
                      )}
                      {language && (
                        <p className="searchRepo--list__content">
                          <strong>Repository Language </strong>
                          {language}
                        </p>
                      )}
                      {topicsComma && (
                        <p className="searchRepo--list__content">
                          <strong>Repository Topics </strong>
                          {topicsComma}
                        </p>
                      )}
                      <a
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="searchRepo--link"
                      >
                        Open in Github
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pagination">
              <Pagination
                reposPerPage={reposPerPage}
                totalRepos={user.length}
                paginate={paginate}
                prevPage={prevPage}
                nextPage={nextPage}
                currentPage={currentPage}
              />
            </div>
            <Back />
          </div>
        </div>
      )}
    </>
  );
};

export default UserRepo;
