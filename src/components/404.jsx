// 404 ERROR PAGE COMPONENT
// This component is used to display a 404 error page if the user tries to access a page that does not exist

import React from 'react';

const Error = () => {
 return (
  <div>
   <h1>404 Error!!!</h1>
   <p>The page you are trying to access does not exist.</p>
  </div>
 );
}

export default Error;