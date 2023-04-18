// CONTACT COMPONENT - This is the contact component for the app. It displays the contact details of the developer{Meeky}.

import React from "react";
import { Helmet } from "react-helmet";
import { Back } from "../components";
import "../assets/styles/about.css";

const About = () => {
  return (
    <section className="contact">
      <Helmet>
        <title>My Contacts</title>
        <meta name="description" content="Contact Me" />
      </Helmet>
      <h1 className="contact--heading">Reach me on any of these...</h1>
      <div className="contact--links">
        <p className="contact--link">08030849685</p>
        <p className="contact--link">
          <a
            href="mailto: meekyberry6@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
        </p>
        <p className="contact--link">
          <a
            href="https://github.com/MeekyBerry"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
        <p className="contact--link">
          <a
            href="https://www.linkedin.com/in/mikkylanky/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className="app--details">
        <div className="desc">
          <h3 className="desc--heading">App Description:</h3>
          <p>
            This is a React app that uses the Github API to search for a user's
            repositories and display them in the app. My GitHub profile is used
            as the default data fetched. Click on the
            <strong>
              {" "}
              Click here to search for more GitHub repositories{" "}
            </strong>{" "}
            button at the top of the <strong>HomePage</strong> to search for any
            user's GitHub repositories.
          </p>
          <p>
            Navigate to <strong>Test Error</strong> page to test the error
            boundary component.
          </p>
        </div>
        <Back />
      </div>
      <footer className="footer">
        <p className="attribution">&copy;Michael Elue 2022</p>
      </footer>
    </section>
  );
};

export default About;
