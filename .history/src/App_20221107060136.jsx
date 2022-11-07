import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Layout, Home, ContextProvider, Repos, MoreInfo, Error, FallbackError } from "./components";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Layout />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos">
            <Route index element={<Repos />} />
            <Route path=":repo" element={<MoreInfo />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </ErrorBoundary>
  );
}

export default App;
