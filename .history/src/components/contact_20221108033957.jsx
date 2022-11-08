// CONTACT COMPONENT- This component is used to display my contact info

import React from "react";
import { Helmet } from "react-helmet";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Helmet>
        <title>Contact</title>
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
    </section>
  );
};

export default Contact;
