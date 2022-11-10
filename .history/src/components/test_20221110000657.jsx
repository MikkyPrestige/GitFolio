// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React, { useRef } from "react";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} style={{padding: ".5rem", fontSize: "1rem"}}>Try again</button>
    </div>
  );
};

const Bomb = ({ username }) => {
  if (username === "Abiola") {
    throw new Error("💣 CABOOM 💣");
  }
  return <h1 style={{color: "#bbe0ff"}}>I salute Gee! {username}🙌🏾</h1>;
};

const ErrorBoundaryTest = () => {
  const [username, setUsername] = React.useState("");
  const usernameRef = useRef(null);

  return (
    <div style={{margin: "5rem", height: "100%"}}>
      <label style={{fontSize: "1.5rem"}}>
        {`Enter your username (Don't type "Abiola"): `}
        <input
          ref={usernameRef}
          value={username}
          onChange={() => setUsername(usernameRef.current.value)}
          style={{border: "none", borderRadius: ".5rem", width: "20%", padding: ".5rem"}} />
      </label>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setUsername("")}
        resetKeys={[username]}
      >
        <Bomb username={username} />
      </ErrorBoundary>
    </div>
  );
};

// const ErrorBoundaryTest = () => {
//   const handleError = useErrorHandler();

//   const handleClick = () => {
//     handleError(new Error('Ooops you have an error'));
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
