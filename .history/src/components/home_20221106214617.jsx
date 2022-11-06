// HOME COMPONENT - This component is the home page for the app.

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {

 return (
  <div>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Home' />
      <Link rel='canonical' href='/Home' />
    </Helmet>
   <h1>Home Page</h1>
  </div>
 );
}

export default Home;