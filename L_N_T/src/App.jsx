import {  BrowserRouter,Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import PropTypes from 'prop-types'; 
import Home from './screens/Home'
import Loader from './components/common/Loader';


const Header = lazy(() => import('./components/common/Header'))


const CommonLayout = ({ children }) => (
  <div>
    {/* Common Navbar component */}
    <Header />

    {/* Render the child components */}
    {children}

    {/* Common Footer component */}
    
  </div>
)

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default function App() {
  const [events, setEvents] = useState([])
  return (
    <Suspense fallback={<Loader />}>
          <BrowserRouter> {/* Wrap your app's routes in BrowserRouter */}
    <div className="App">
    
        <Routes>
          <Route
            path="/"
            element={
              <CommonLayout>
                <Home />
              </CommonLayout>
            }
          />
             <Route
            path="/signin"
            element={
              <CommonLayout>
                <Home />
              </CommonLayout>
            }
          />
        </Routes>
     
    </div>
  </BrowserRouter>
    </Suspense>
  )
}