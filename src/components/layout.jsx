// LAYOUT COMPONENT - This component is the layout for the entire app. It contains the header and footer components and the Navigation for the app.

import React from 'react';
import { NavLink } from 'react-router-dom';

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
  <div>
   <header>
    <nav>
     <CustomNavLink to="/" end>Home</CustomNavLink>
     <CustomNavLink to="repos">Repo's</CustomNavLink>
     <CustomNavLink to="contact">Contact</CustomNavLink>
    </nav>
   </header>
  </div>
 );
}

export default Layout;