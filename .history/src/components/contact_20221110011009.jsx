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
        <p  className="contact--link">08030849685</p>
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
        <p className="contact--link">
          <a
            href="https://replit.com/@meekyberry"
            target="_blank"
            rel="noreferrer"
          >
            Replit
          </a>
        </p>
        <p  className="contact--link">
          <a
            href="https://leetcode.com/meekyberry/"

            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
        </p>
      </div>
      <div className="app--details">
        <div className="desc">
          <h3 className="desc--heading">App Description:</h3>
          <p>
            This is a simple app that displays the repositories of this github
            user. It also displays the number of followers, following and the
            bio of this user, etc. The data is gotten from the github api and
            displayed on the app page.
            This is a React app that uses Github API to fetch and display a
                list of my github repositories and some extra data about each
                repository when "View Repo data" button is clicked in the Repository list. It also
                displays my name, followers and following count, location,
                current local time and bio etc. from my github portfolio.
          </p>
          <p>
            Data is passed between components with React useContext and React
            Router DOM is used for Routing in the app and React Helmet for SEO.
          </p>
          <p>
            React ErrorBoundary is used to catch errors in the app and display a
            fallback UI when an error is caught in the app and React lazy and
            Suspense is used to lazy load the components in the app.
          </p>
          <p>
            A Test page is also added to the app to test the app's error
            boundary.
          </p>
          <p>
            404 Error page is also added to the app to display when a wrong url
            is entered in the app and the app is deployed to Vercel.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p className="attribution">&copy;meekyberry2022</p>
      </footer>
    </section>
  );
};

export default Contact;
