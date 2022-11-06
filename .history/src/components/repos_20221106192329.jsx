// GITHUB PORTFOLIO COMPONENT -  This component is used to fetch my github portfolio from the API and show a list of the github repositories in a page
// Implement an API fetch of the GitHub portfolio
// Show a page with a list of all my repositories on GitHub(the page should implement pagination for the repo list)
// Link to open each repository in another page with use location hook when 'MORE INFO' is clicked on each repo in the repo lists using useSearParams hook in the context hook?

import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Context } from "./context";

const Repos = () => {
  const { portfolio, setPage, page } = useContext(Context);

  return (
    <div>
      <h1>Repository Lists</h1>
      <div className="repos">
        {portfolio.map(repo => {
          return (
            <div key={repo.id} className="repo">
              <h3>Repo Name: {repo.name}</h3>
              {/* <p>Repo Description: {repo.description}</p> */}
              {/* <p>Repo Language: {repo.language}</p> */}
              <NavLink to={`/repos/${repo.name}`}>More Info</NavLink>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Repos;