// LAYOUT COMPONENT - This component is the layout for the Navigation bar. It contains the header logo and the Navigation for the app.

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/layout.css";
import Logo from "../assets/img/rest-api-logo.webp";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

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
          <Link to="/"><img
            src={Logo}
            alt="logo"
            style={{ width: "8rem", height: "4rem" }}
          /></Link>
        </div>
        <nav className="layout--items">
          <button onClick={toggleNav} className="layout--btn">
            {nav ? (
              <MdClose className="layout--btn--icon" />
            ) : (
              <FiMenu className="layout--btn--icon" />
            )}
          </button>
          <div className={`menuNav ${nav ? " showMenu" : ""}`}>
            <CustomNavLink
              to="/"
              end
              className="layout--item"
              onClick={() => closeNav()}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              to="repos"
              className="layout--item"
              onClick={() => closeNav()}
            >
              Repositories
            </CustomNavLink>
            <CustomNavLink
              to="test"
              className="layout--item"
              onClick={() => closeNav()}
            >
              Test Error
            </CustomNavLink>
            <CustomNavLink
              to="contact"
              className="layout--item"
              onClick={() => closeNav()}
            >
              Contact
            </CustomNavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

const LargeLayout = () => {
  return (
    <div className="layout">
      <header className="layout--header">
        <div className="layout--header--logo">
          <Link to="/"><img
            src={Logo}
            alt="logo"
            style={{ width: "8rem", height: "4rem" }}
          /></Link>
        </div>
        <nav className="layout--items">
          <CustomNavLink to="/" end className="layout--item">
            Home
          </CustomNavLink>
          <CustomNavLink to="repos" className="layout--item">
            Repositories
          </CustomNavLink>
          <CustomNavLink to="test" className="layout--item">
            Test Error
          </CustomNavLink>
          <CustomNavLink to="contact" className="layout--item">
            Contact
          </CustomNavLink>
        </nav>
      </header>
    </div>
  );
};

export default Layout;
