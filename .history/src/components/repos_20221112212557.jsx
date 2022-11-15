// GITHUB PORTFOLIO COMPONENT -  This component is used to fetch my github portfolio from the API and show a list of the github repositories in a page

import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Context } from "./context";
import "../assets/styles/repos.css";
import { Helmet } from "react-helmet";

const Repos = () => {
  const { portfolio, setPage, page } = useContext(Context);

  return (
    <div className="repos">
      <Helmet>
        <title>Repositories</title>
        <meta name="description" content="Repositories" />
      </Helmet>
      <h1 className="repos--heading">Repository Lists</h1>
      <div>
        <ul>
          {portfolio.map((repo) => {
            return (
              <li key={repo.id} className="repos--list">
                <h2 className="repos--list__item">{repo.name}</h2>
                <NavLink to={`/repos/${repo.name}`} className="repos--btn">
                  View Repo Data
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pagination">
        <button
          className="repos--btn btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <p>
          Page {page} of {portfolio.length}
           </p>
        <button
          className="repos--btn btn"
          onClick={() => setPage(page + 1)}
          disabled={page === 4}
        >
          Next
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Repos;
