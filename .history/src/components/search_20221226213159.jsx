// A COMPONENT TO SEARCH FOR OTHER GITHUB USERS

import React, { useState, useContext } from "react";
import { Context } from "./context";

const Search = () => {
  const { setPage } = useContext(Context);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch("");
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