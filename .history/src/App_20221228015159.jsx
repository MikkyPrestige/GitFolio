import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  ContextProvider,
  Repos,
  MoreInfo,
  ErrorBoundaryTest,
  About,
  Error,
  FallbackError,
} from "./components";
import Users from "./components/searchUser";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Layout />
      <Users />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos">
            <Route index element={<Repos />} />
            <Route path=":repo" element={<MoreInfo />} />
          </Route>
          <Route path="/test" element={<ErrorBoundaryTest />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider>
    </ErrorBoundary>
  );
};

export default App;
