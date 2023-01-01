// A COMPONENT TO SEARCH FOR OTHER GITHUB USERS

import React, { useState, } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;