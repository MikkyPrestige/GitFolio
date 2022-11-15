// 404 ERROR PAGE COMPONENT -  This is the 404 error page component for the app. It displays a 404 error message when the user tries to access a route that does not exist.
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import avatar from "../assets/img/404-medium.gif"

const Error = () => {
  return (
    <div className="error">
      <Helmet>
        <title>Error Page</title>
        <meta name="description" content="Error message for invalid Route" />
      </Helmet>
      <img src={avatar} alt="404 error img" />
      <p style={{fontSize: "1.5rem", color: "red"}}>
        The page you are trying to access does not exist.
      </p>
      <Link to="/" className="error--link" style={{backgroundColor: "#0046dc", color: }}>
        Back
      </Link>
    </div>
  );
};

export default Error;
