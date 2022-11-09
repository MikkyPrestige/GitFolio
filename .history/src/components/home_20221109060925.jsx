// HOME COMPONENT - This is the home page component for the app. It displays the app info message and a button to navigate to the repositories page.
// Display Name, followers and following count, location, current local time and bio from my github portfolio
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import Image from "../assets/img/avatar.jpeg";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [ display, setDisplay ] = useState()

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.github.com/users/oluwaseun-ogunlana`)
      .then((response) => response.json())
      .then((data) => {
    setDisplay(data);
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="home--container">
        <div className="home--container__left">
          <img src={Image} alt="avatar" className="home--container__left__img" />
        </div>
        <div className="home--container__right">
          <h1 className="home--container__right__heading">Hi, I'm Oluwaseun</h1>
          <p className="home--container__right__text">
            I'm a Frontend Developer and a UI/UX Designer. I love building
            beautiful and functional websites and apps. I'm also a self-taught
            developer and a self-taught designer. I'm currently learning React
            Native and Flutter.
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


  // return (
  //   <div className="home">
  //     <Helmet>
  //       <title>Home Page</title>
  //       <meta name="description" content="Home" />
  //       <link rel="canonical" href="react-helmet" />
  //     </Helmet>
  //     <h1 className="home--heading">
  //       Meeky's Github Portfolio repositories display app!!!
  //     </h1>
  //     <div className="home--wrapper">
  //       <div className="home--img">
  //         <img
  //           src={Image}
  //           alt="Michael"
  //           style={{ borderRadius: "50%", width: "15rem", height: "15rem" }}
  //         />
  //       </div>
  //       <div className="home--paragraph">
  //       <p className="home--info__text">
  //         This is a simple app that displays my github repositories. It uses the
  //         github API to fetch the data and displays it in a list. Click on the
  //         "View Repo Data" link to view more data on each repository.
  //       </p>
  //         <p>
  //           This is a React app that uses the Github API to display a list of
  //           repositories and some extra data about each repository.
  //         </p>
  //         <p>
  //           It uses the Github API to get the data and React Router to display
  //           the data.
  //         </p>
  //         <p>The data are passed between components with React useContext.</p>
  //         <p>
  //           React ErrorBoundary is used to display error message to the app UI
  //           when there is a JavaScript error in the code.
  //         </p>
  //         <p>A test page for ErrorBoundary is included.</p>
  //         <p>404 Error page is displayed when Routing to an invalid Route </p>
  //         <p>It uses React Helmet to add meta data to the page.</p>
  //       </div>
  //       <button
  //         className="home--btn"
  //         onClick={() => navigate("/repos")}
  //         disabled={portfolio.length === 0}
  //       >
  //         View Repositories
  //       </button>
  //     </div>
  //     <footer className="footer">
  //       <p className="attribution">&copy;meekyberry2022</p>
  //     </footer>
  //   </div>
  // );
};

export default Home;
