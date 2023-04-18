import { React, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import { Route, Routes } from "react-router-dom";
import AppRouter from "./routes";
import {
  Layout,
  // Home,
  // ContextProvider,
  // Repos,
  // MoreInfo,
  // ErrorBoundaryTest,
  // About,
  // Error,
  FallbackError,
  // UserRepo,
} from "./components";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Layout />
      {/* <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos">
            <Route index element={<Repos />} />
            <Route path=":repo" element={<MoreInfo />} />
          </Route>
          <Route path="/test" element={<ErrorBoundaryTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/searchRepo" element={<UserRepo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextProvider> */}
    </ErrorBoundary>
  );
};

export default App;
