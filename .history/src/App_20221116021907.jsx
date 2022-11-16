import React from "react";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
let lasy = lazy( import {
  Layout,
  Home,
  ContextProvider,
  Repos,
  MoreInfo,
  ErrorBoundaryTest,
  Contact,
  Error,
  FallbackError,
} from "./components";

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
          <Route path="/test" element={<ErrorBoundaryTest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
