import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/layout";
import FallbackError from "./components/fallbackError";
import AppRouter from "./routes";
import Search from "./components/search";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Layout />
      <Search />
      <AppRouter />
    </ErrorBoundary>
  );
};

export default App;
