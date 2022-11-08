// GITHUB PORTFOLIO COMPONENT -  This component is used to fetch my github portfolio from the API and show a list of the github repositories in a page
// Implement an API fetch of the GitHub portfolio
// Show a page with a list of all my repositories on GitHub(the page should implement pagination for the repo list and disabled state fpr accessibility)
// Link to open each repository in another page with use location hook when 'MORE INFO' is clicked on each repo in the repo lists using useSearParams hook in the context hook?

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
      <div className="repos--wrapper">
        <h1 className="repos--heading">Repository Lists</h1>
        <div>
          <ul className="repos--items">
            {portfolio.map((repo) => {
              return (
                <li key={repo.id} className="repos--list">
                  <h3 className="repos--list__item"> {repo.name}</h3>
                  <NavLink to={`/repos/${repo.name}`} className="repos--btn">
                    View Repo Data
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pagination">
        <button
          className="repos--btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="repos--btn"
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
