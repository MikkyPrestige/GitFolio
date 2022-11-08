// 404 ERROR PAGE COMPONENT -  This is the 404 error page component for the app. It displays a 404 error message when the user tries to access a route that does not exist.
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error--heading">404 Error!!!</h1>
      <p className="error--paragraph">
        The page you are trying to access does not exist.
      </p>
      <Link to="/" className="error--link">
        Back
      </Link>
    </div>
  );
};

export default Error;
