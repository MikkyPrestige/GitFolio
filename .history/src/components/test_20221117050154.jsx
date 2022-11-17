// ERRORBOUNDARY TEST COMPONENT - This is a page to test errorboundary.

import React, { useRef } from "react";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { Back } from "../components";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ textAlign: "center", marginTop: "5rem" }}>
      <p style={{ fontSize: "2rem", fontWeight: "700" }}>
        You failed the test!!!
      </p>
      <pre
        style={{
          fontStyle: "italic",
          fontSize: "2.2rem",
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
  if (username === "ABIOLA") {
    throw new Error("💣Bomboclat💣");
  }
  else if (username !== "ABIOLA") {
    return <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>All Good</p>;
  }
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ color: "#bbe0ff", fontSize: "2.5rem" }}>
        Hello {username}, you passed the test...Hurray!!!
      </h1>
    </div>
  );
};

const ErrorBoundaryTest = () => {
  const [username, setUsername] = React.useState("");
  const usernameRef = useRef(null);

  return (
    <div style={{ margin: "3rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#ffea11" }}>
        ErrorBoundary Test Page
      </h1>
      <label style={{ fontSize: "1.3rem", fontWeight: "700" }}>
        {`Type your Username (Don't type "ABIOLA"): `} {""}
        <input
          ref={usernameRef}
          value={username}
          onChange={() => setUsername(usernameRef.current.value)}
          style={{
            border: "none",
            borderRadius: ".5rem",
            width: "15rem",
            padding: ".3rem",
            fontSize: "1.5rem",
            fontWeight: "700",
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
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <Back />
      </div>
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
