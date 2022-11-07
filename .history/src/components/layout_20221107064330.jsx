// LAYOUT COMPONENT - This component is the layout for the entire app. It contains the header and footer components and the Navigation for the app.

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/layout.css'
import Logo from '../assets/img/rest-api-logo.webp'
const CustomNavLink = ({ to, ...props }) => {
 let activeStyle = {
  color: 'red',
  fontWeight: 'bold',
  textDecoration: 'underline',
 }
 return (
  <NavLink to={to} style={({ isActive }) => isActive ? activeStyle : { textDecoration: 'none' }} {...props} />
 );
}

const Layout = () => {
 return (
  <div className="layout">
    <header className="layout--header">
      <div className="layout--header--logo">
        <img src={Logo} alt="logo" style={{width: '8rem', height: '4rem'}}/>
      </div>
    <nav className="layout--items">
    <CustomNavLink to="/" end className="layout--item">Home</CustomNavLink>
    <CustomNavLink to="repos" className="layout--item">Repo's</CustomNavLink>
    <CustomNavLink to="contact" className="layout--item">Contact</CustomNavLink>
    </nav>
    </header>
  </div>
 );
}

export default Layout;