import{ lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Repos } from '../components'

const Home = lazy(() => import('../components/home'))
const About = lazy(() => import('../components/about'))
// const Contact = lazy(() => import('../components'))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="repos">
          <Route index element={<Repos />} />
        </Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Suspense>
  )
}

export default AppRouter;
