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
        <h2>
          <strong>App Details</strong>
        </h2>
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
          followers, following and the bio of the user, etc. The data is gotten from the github api and displayed on the app page.
        </p>
        <p>
          Data's passed between components with React useContext and React Router DOM is used for Routing in the app and React Helmet for SEO.
        </p>
        <p>
          React ErrorBoundary is used to catch errors in the app and display a fallback UI when an error is caught in the app and React lazy and Suspense is used to lazy load the components in the app.
        </p>
        <p>
          A Test page is also added to the app to test the app's error boundary.
        </p>
        <p>
          404 Error page is also added to the app to display when a wrong url is entered in the app and the app is deployed to Vercel.
        </p>
      </div>
    </section>
  );
};

export default Contact;
