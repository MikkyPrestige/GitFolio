
// HOME COMPONENT - This component is the home page for the app.

import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {

 return (
  <div>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Home' />
      <link rel='canonical' href='react-helmet' />
    </Helmet>
   <h1>Github Portfolio API</h1>
    <p>This is a React app that uses the Github API to display a list of repositories and some extra data about each repository.</p>
    <p>It uses the Github API to get the data and React Router to display the data.</p>
    <p>It uses React Helmet to add meta data to the page.</p>
    <p>It uses React Context to pass data between components.</p>
    <p>It uses React Hooks to manage state.</p>


  </div>
 );
}

export default Home;