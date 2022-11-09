// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [display, setDisplay] = useState();
  // const [ error, setError] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/users/MeekyBerry`)
      .then((response) => response.json())
      .then((data) => {
        setDisplay(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home" />
      </Helmet>
      <h1 className="home--heading">
        Meeky's Github Portfolio repositories display app!!!
      </h1>
      <div className="home--wrapper">
        <div className="home--info">
        <div className="home--img">
          <img
            src={display?.avatar_url}
            alt="Michael"
            style={{ borderRadius: "50%", width: "15rem", height: "15rem" }}
          />
        </div>
        <div className="home--container__bottom">
        <h2 className="home--container--data">
          <strong>Name: </strong>
          {display?.name}
        </h2>
        <h3 className="home--container__data">
          <strong>Bio: </strong>
          {display?.bio}
        </h3>
        <h3 className="home--container__data">
          <strong>Followers: </strong>
          {display?.followers}
        </h3>
        <h3 className="home--container_data">
          <strong>Following: </strong>
          {display?.following}
        </h3>
        <h3 className="home--container__data">
          <strong>Location: </strong>
          {display?.location}
        </h3>
        <h3 className="home--container__data">
          <strong>Joined: </strong>
          {display?.created_at}
        </h3>
      </div>
        </div>
        <div className="home--paragraph">
          <h1 className="home--paragraph__heading">Hi, I'm Elue Michael</h1>
          <p className="home--paragraph__text">
            I'm a Frontend Developer. I love building beautiful and functional
            websites and apps. I'm also a student of AltSchool Africa School of
            Engineering. I'm currently learning React.
            <p>
              This is a React app that uses Github API to fetch and display a
              list of my github repositories and some extra data about each
              repository when "View Repositories" button is clicked. It also
              displays my name, followers and following count, location, current
              local time and bio from my github portfolio.
            </p>
          </p>
          <button className="home--btn" onClick={() => navigate("/portfolio")}>
            View Repositories
          </button>
        </div>
      </div>
      <footer className="footer">
        <p className="attribution">&copy;meekyberry2022</p>
      </footer>
    </div>
  );
};

export default Home;
