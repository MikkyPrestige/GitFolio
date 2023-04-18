import { React, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRouter from "./routes";
import { Layout, FallbackError } from "./components";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={<div className="home--loading">Loading...</div>}>
        <Layout />
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
