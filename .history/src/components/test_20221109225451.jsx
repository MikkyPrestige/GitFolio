// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React, { useRef } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Bomb =({ username }) => {
  if ( username === "Abiola") {
    throw new Error("💣");
  }
  return <h1>My boy {username}</h1>;
}

const ErrorBoundaryTest = () => {
const [username, setUsername] = React.useState("");
const usernameRef = useRef(null);

return (
  <div>
    <label>
      {`Enter your username (Don't type "Abiola"): `}
      <input
        ref={usernameRef}
        value={username}
        onChange={() => setUsername(usernameRef.current.value)}
      />
    </label>
    <ErrorBoundary FallbackComponent={ErrorFallback}
    onReset={() => setUsername("")}
    resetKeys={[username]}
    >
      <Bomb username={username} />
    </ErrorBoundary>
  </div>
);
}

// const ErrorBoundaryTest = () => {
//   const handleError = useErrorHandler();

//   const handleClick = () => {
//     handleError(new Error('Something went wrong'));
//   };

//   return (
//     <div>
//       <ErrorBoundary FallbackComponent={ErrorFallback}>
//         <button onClick={handleClick}>Throw an error</button>
//       </ErrorBoundary>
//     </div>
//   );
// };

export default ErrorBoundaryTest;