// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [ display, setDisplay ] = useState()
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
        <div className="home--img">
          <img src={display?.avatar_url} alt="Michael" style={{ borderRadius: "50%", width: "15rem", height: "15rem" }} />
        </div>
        <div className="home--paragraph">
          <h1 className="home--paragraph__heading">Hi, I'm Elue Michael</h1>
          <p className="home--paragraph__text">
            I'm a Frontend Developer. I love building
            beautiful and functional websites and apps. I'm also a student of AltSchool Africa School of Engineering. I'm currently learning React.
          </p>
          <button
            className="home--container__right__button"
            onClick={() => navigate("/portfolio")}
          >
            View My Portfolio
          </button>
        </div>
      </div>
      <div className="home--container__bottom">
        <div className="home--container__bottom__left">
          <h1 className="home--container__bottom__left__heading">
            {display?.name}
          </h1>
          <p className="home--container__bottom__left__text">
            {display?.bio}
          </p>
        </div>
        <div className="home--container__bottom__right">
          <div className="home--container__bottom__right__item">
            <h1 className="home--container__bottom__right__item__heading">
              {display?.followers}
            </h1>
            <p className="home--container__bottom__right__item__text">
              Followers
            </p>
          </div>
          <div className="home--container__bottom__right__item">
            <h1 className="home--container__bottom__right__item__heading">
              {display?.following}
            </h1>
            <p className="home--container__bottom__right__item__text">
              Following
            </p>
          </div>
          <div className="home--container__bottom__right__item">
            <h1 className="home--container__bottom__right__item__heading">
              {display?.location}
            </h1>
            <p className="home--container__bottom__right__item__text">
              Location
            </p>
          </div>
          <div className="home--container__bottom__right__item">
            <h1 className="home--container__bottom__right__item__heading">
              {display?.created_at}
            </h1>
            <p className="home--container__bottom__right__item__text">
              Joined
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;
