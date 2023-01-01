// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/MeekyBerry`)
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>No repos Found</p>;

  const {
    name,
    followers,
    following,
    location,
    bio,
    avatar_url,
    public_repos,
    twitter_username,
  } = display || {};

  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="home--container__top">
        <Link to="searchUser" className="home--container__topLink">
            Click here to search for any Github user repository
        </Link>
      </div>
      <div className="home--container__time">
        <span>
          <strong>Date: </strong>
          {new Date().toLocaleDateString()}
        </span>
        <span>
          <strong>Time: </strong>
          {new Date().toLocaleTimeString()}
        </span>
      </div>
      <div className="home--container">
        <h1 className="home--heading">
          Github repository display app!!!
        </h1>
        <div className="home--paragraph">
          <div className="home--paragraph__text">
            <p>
              This is a simple app that displays github users repositories. Click
              on the link above to 'search for any github user repository' and button below to 'view my repositories'.
            </p>
          </div>
          <div className="home--wrapper">
            <div className="home--info">
          <h1 className="home--paragraph__heading">Hi, I'm {name}.</h1>
              <div className="home--img">
                <img
                  src={avatar_url}
                  alt="My img"
                  style={{ borderRadius: "50%", width: "50%", height: "50%" }}
                />
              </div>
              <div className="home--container__bottom">
                <p className="home--container__data">
                  <strong>Bio: </strong>
                  {bio}
                </p>
                <p className="home--container__data">
                  <strong>Followers: </strong>
                  {followers}{" "}
                </p>
                <p className="home--container__data">
                  <strong>Following: </strong>
                  {following}{" "}
                </p>
                <p className="home--container__data">
                  <strong>Public Repos: </strong>
                  {public_repos}{" "}
                </p>
                <p className="home--container__data">
                  <strong>Location: </strong>
                  {location}{" "}
                </p>
                <p className="home--container__data">
                  <strong>Twitter: </strong>
                  {twitter_username}{" "}
                </p>
              </div>
            </div>
            <div className="home--button">
              <button className="home--btn" onClick={() => navigate("/repos")}>
                View Repositories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
