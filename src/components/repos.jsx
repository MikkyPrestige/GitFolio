// GITHUB PORTFOLIO COMPONENT -  This component is used to fetch my github portfolio from the API and show a list of the github repositories in a page
// Implement an API fetch of the GitHub portfolio
// Show a page with a list of all my repositories on GitHub(the page should implement pagination for the repo list)
// Link to open each repository in another page when 'MORE INFO' is clicked on each repo in the repo lists using useSearParams hook in the context hook?

import React, { useContext } from 'react';
import { Context } from './context';
import { Link, useSearchParams } from 'react-router-dom';

const Repos = () => {
  const { portfolio, page, setPage } = useContext(Context);   // get repo data from the useContext hook in the contextProvider
  // console.log(portfolio, page);
  const [searchParams] = useSearchParams();  // useSearchParams hook to get the search params from the URL and set the repoName to the value of the search params in the URL
  // const repoName = searchParams.get('repo'); // get the repoName from the search params in the URL
  // console.log(repoName);
  // const repo = portfolio.find(repo => repo.name === repoName);
  // console.log(repo);

  return (
    <div>
      <h1>REPOSITORIES</h1>
      <div className="portfolio">
        {portfolio.map(repo => {
          return (
            <div className="repo" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
              <Link to={`?repo=${repo.name}`}>More info</Link>
            </div>
          )
        })}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <button onClick={() => setPage(page + 1)} disabled={page === 10}>Next</button>
      </div>
    </div>
  );

}

export default Repos;