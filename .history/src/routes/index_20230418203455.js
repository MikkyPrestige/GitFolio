import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../components/home"));
const About = lazy(() => import("../components/about"));
const Repos = lazy(() => import("../components/repos"));
const MoreInfo = lazy(() => import("../components/moreInfo"));
const Error = lazy(() => import("../components/404"));
const ErrorBoundaryTest = lazy(() => import("../components/test"));
const ContextProvider = lazy(() => import("../components/context"));
const UserRepo = lazy(() => import("../components/userRepo"));

const AppRouter = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <ContextProvider>
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
      </ContextProvider>
    // </Suspense>
  );
};

export default AppRouter;
