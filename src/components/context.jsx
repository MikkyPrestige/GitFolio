// CONTEXT COMPONENT
// Create useContext hook to fetch my github portfolio from REST API
// Show a page with a list of all my repositories on GitHub(the page should implement pagination for the repo list)
// Implement a search bar to search for a specific repository by name
// Implement a filter to filter the list of repositories by language
// Link to another page with more info on a each repository when the user clicks on the'MORE INFO' link in the list of repos

import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const [portfolio, setPortfolio] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/MeekyBerry/repos?page=${page}&per_page=4`)
      .then(response => response.json())
      .then(data => {
        setPortfolio(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

  return (
    <Context.Provider value={{ portfolio, page, setPage }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

