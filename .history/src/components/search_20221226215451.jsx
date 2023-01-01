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
      {displayUser()}
    </div>
  );
}

export default Search;

const displayUser = () => {
  // const search = search;
  if (search) {
    return (
      <div>
        <p>{search.login}</p>
        <p>{search.name}</p>
        <p>{search.bio}</p>
        <p>{search.public_repos}</p>
        <p>{search.public_gists}</p>
        <p>{search.followers}</p>
        <p>{search.following}</p>
        <p>{search.created_at}</p>
        <p>{search.updated_at}</p>
        <p>{search.html_url}</p>
        <p>{search.location}</p>
        <p>{search.blog}</p>
        <p>{search.company}</p>
        <p>{search.email}</p>
        <p>{search.twitter_username}</p>
        <p>{search.avatar_url}</p>
      </div>
    );
  }
};
