import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/layout";
import FallbackError from "./components/FallbackError";
import AppRouter from "./routes";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Layout />
      <AppRouter />
    </ErrorBoundary>
  );
};

export default App;
