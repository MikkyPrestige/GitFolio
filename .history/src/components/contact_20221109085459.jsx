// CONTACT COMPONENT - This is the contact component for the app. It displays the contact details of the developer{Meeky}.

import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Helmet>
        <title>My Contacts</title>
        <meta name="description" content="Contact Me" />
      </Helmet>
      <h1 className="contact--heading">Reach me on any of these...</h1>
      <div className="contact--links">
        <p>08030849685</p>
        <p>
          <a
            href="mailto: meekyberry6@gmail.com"
            className="contact--link"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
        </p>
        <p>
          <a
            href="https://github.com/MeekyBerry"
            className="contact--link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/mikkylanky/"
            className="contact--link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://replit.com/@meekyberry"
            className="contact--link"
            target="_blank"
            rel="noreferrer"
          >
            Replit
          </a>
        </p>
        <p>
          <a
            href="https://leetcode.com/meekyberry/"
            className="contact--link"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </p>
      </div>
      <div className="app--details">
        <p>
          <strong>App Name: </strong> Meeky's Github Portfolio repositories display app!!!
        </p>
        <p>
          <strong>App Version: </strong> 1.0.0
        </p>
        <p>
          <strong>App Author: </strong> Elue Michael
        </p>
        <p>
          <strong>App Description: </strong> This is a simple app that displays
          the repositories of a github user. It also displays the number of
          followers, following and the bio of the user.
        </p>
        <p>

        </p>
      </div>

    </section>
  );
};

export default Contact;
