// A COMPONENT TO SEARCH FOR OTHER GITHUB USERS

import React, { useState, useEffect, createContext } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No user Found</p>;

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;


