// HOME COMPONENT - This component is the home page for the app.
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/home.css";
import Image from "../assets/img/avatar.jpeg";
import { Context } from "./context";

const Home = () => {
  const { user } = useContext(Context);
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="canonical" href="react-helmet" />
      </Helmet>
      <h1 className="home--heading">
        Welcome to my Github Portfolio repositories!!!
      </h1>
      <div className="home--wrapper">
        <div className="home--img">
          <img
            src={Image}
            alt="Michael"
            style={{ borderRadius: "50%", width: "15rem", height: "15rem" }}
          />
        </div>
        <div className="home--paragraph">
          <p>
            This is a React app that uses the Github API to display a list of
            repositories and some extra data about each repository.
          </p>
          <p>
            It uses the Github API to get the data and React Router to display
            the data.
          </p>
          <p>The data are passed between components with React useContext.</p>
          <p>
            React ErrorBoundary is used to display error message to the app UI
            when there is an error in the code.
          </p>
          <p>404 Error page is displayed when Routing to an invalid Route </p>
          <p>It uses React Helmet to add meta data to the page.</p>
        </div>
      </div>

      <footer className="footer">
        <p className="attribution">&copy;meekyberry2022</p>
      </footer>
    </div>
  );
};

export default Home;
