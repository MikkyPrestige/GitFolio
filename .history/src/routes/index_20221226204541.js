import{ lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../components/home'))
const About = lazy(() => import('../components/about'))
const Repos = lazy(() => import('../components/repos'))
const MoreInfo = lazy(() => import('../components/moreInfo'))
const Error = lazy(() => import('../components/error'))
const ErrorBoundaryTest = lazy(() => import('../components/errorBoundaryTest'))
const ContextProvider = lazy(() => import('../components/contextProvider'))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="repos">
          <Route index element={<Repos />} />
          <Route path=":repoId" element={<MoreInfo />} />
        </Route>
        <Route path="test" element={<ErrorBoundaryTest />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </ContextProvider>
    </Suspense>
  )
}

export default AppRouter;
