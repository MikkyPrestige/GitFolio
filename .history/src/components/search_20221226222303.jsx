// A COMPONENT TO SEARCH FOR OTHER GITHUB USERS

import React, { useState, useEffect, createContext, useContext } from "react";

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


export const DisplayUser = () => {
  const { user } = useContext(userContext);
  const { login, avatar_url, html_url, name, bio, location, blog, twitter_username, public_repos, public_gists, followers, following, created_at } = user || {};

  return (
    <div className="user">
      <div className="user--info">
        <div className="user--avatar">
          <img src={avatar_url} alt="user"/>
        </div>
        <div className="user--details">
          <h1 className="user--name">{name}</h1>
          <p className="user--bio">{bio}</p>
          <p className="user--location">{location}</p>
          <p className="user--blog">{blog}</p>
          <p className="user--twitter">{twitter_username}</p>
          <p className="user--created">{created_at}</p>
        </div>
      </div>
      <div className="user--stats">
        <div className="user--repos">
          <p className="user--repos--number">{public_repos}</p>
          <p className="user--repos--text">Repos</p>
        </div>
        </div>
        </div>
  );
};

