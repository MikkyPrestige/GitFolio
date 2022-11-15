// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React, { useRef } from "react";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { Back } from "../components";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ textAlign: "center", marginTop: "5rem" }}>
      <p style={{ fontSize: "1.5rem" }}>Error! Error!! Error!!!</p>
      <pre
        style={{
          fontStyle: "italic",
          fontSize: "1.8rem",
          fontWeight: "700",
          color: "red",
        }}
      >
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        style={{
          padding: ".5rem",
          fontSize: "1rem",
          fontWeight: "700",
          color: "#0046dc",
          borderRadius: ".5rem",
        }}
      >
        Try again
      </button>
    </div>
  );
};

const Bomb = ({ username }) => {
  if (username === "Abiola") {
    throw new Error("💣Bomboclat💣");
  }
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ color: "#bbe0ff" }}>Hello {username}, welcome!!!</h1>
    </div>
  );
};

const ErrorBoundaryTest = () => {
  const [username, setUsername] = React.useState("");
  const usernameRef = useRef(null);

  return (
    <div style={{ margin: "5rem", height: "100vh" }}>
      <Back style={{ marginLeft: "20rem" }}/>
      <label style={{ fontSize: "1.5rem" }}>
        {`Enter your username (Don't type "Abiola"): `}
        <input
          ref={usernameRef}
          value={username}
          onChange={() => setUsername(usernameRef.current.value)}
          style={{
            border: "none",
            borderRadius: ".5rem",
            width: "10rem",
            padding: ".5rem",
          }}
        />
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
