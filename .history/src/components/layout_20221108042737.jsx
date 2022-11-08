// LAYOUT COMPONENT - This component is the layout for the entire app. It contains the header and footer components and the Navigation for the app.

import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/layout.css";
import Logo from "../assets/img/rest-api-logo.webp";
import { useState } from "react";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    color: "red",
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none" }
      }
      {...props}
    />
  );
};

const Layout = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--header--logo">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "8rem", height: "4rem" }}
          />
        </div>
        <nav className="layout--items">
        <button onClick={toggleNav} className="layout--btn">{nav ? "close" : "open"}</button>
        <div className={`menuNav ${nav ? " showMenu" : ""}`}>
          <CustomNavLink to="/" end className="layout--item" onClick={}>
            Home
          </CustomNavLink>
          <CustomNavLink to="repos" className="layout--item" onClick={}>
            Repositories
          </CustomNavLink>
          <CustomNavLink to="contact" className="layout--item" onClick={}>
            Contact
          </CustomNavLink>
        </div>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
