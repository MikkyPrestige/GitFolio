// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  if (loading) return <p className="home--loading">Loading...</p>
  if (error) return <p className="home--error"></p>


  const {
    name,
    followers,
    following,
    location,
    bio,
    avatar_url,
    public_repos,
    // twitter_username,
  } = display || {};

  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="home--container__top">
        <Link to="searchRepo" className="home--container__topLink">
          Click here to search for more Github repositories
        </Link>
      </div>
      {/* <div className="home--container__time">
        <span>
          <strong>Date: </strong>
          {new Date().toLocaleDateString()}
        </span>
        <span>
          <strong>Time: </strong>
          {new Date().toLocaleTimeString()}
        </span>
      </div> */}
      <div className="home--container">
        <h1 className="home--heading">Github repository display app!!!</h1>
        <div className="home--paragraph">
          <div className="home--paragraph__text">
            <p>
              This is a simple app that displays my github repositories and also
              used to search for other github users repositories.
            </p>
          </div>
          <div className="home--wrapper">
            <h1 className="home--info__heading">{name} github portfolio</h1>
            <div className="home--info">
              <div className="home--img">
                <img
                  src={avatar_url}
                  alt="My img"
                  style={{ borderRadius: "1rem", width: "100%", height: "100%" }}
                />
              </div>
              <div className="home--container__bottom">
                <p className="home--container__data intro">
                    <strong className="intro__strong">Intro </strong>
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
                {/* <p className="home--container__data"> */}
                  {/* <strong>Twitter: </strong> */}
                  {/* {twitter_username}{" "} */}
                {/* </p> */}
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
