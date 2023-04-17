// CONTEXT COMPONENT - This is the context component for the app. It provides the data to the app components. It uses the Github API to fetch the data.

import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [repository, setRepository] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/MeekyBerry/repos?page=${page}&per_page=4`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepository(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  <div
    style={{
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "10rem auto",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      minHeight: "100vh"
    }}
  >
    if (loading) return{" "}
    <p
      style={{
        color: "#19F3A9",
      }}
    >
      Loading...
    </p>
    if (error) return{" "}
    <p
      style={{
        color: "#F31919",
      }}
    >
      Network Error,
      <span
        style={{
          color: "#19F3A9",
        }}
      >
        {" "}
        please refresh the page.
      </span>
    </p>
    ;
  </div>;

  return (
    <Context.Provider value={{ repository, page, setPage }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
