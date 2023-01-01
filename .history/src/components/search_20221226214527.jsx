// A COMPONENT TO SEARCH FOR OTHER GITHUB USERS

import React, { useState, } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((data) => setSearch(data))
      .catch((error) => setError(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a Github user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>No user found</p>}
    </div>
  );
}

export default Search;