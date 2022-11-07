
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

  </div>
 );
}

export default Home;