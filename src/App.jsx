import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import Navbar from './component/navbar'
import Login from './component/login'
import Signup from './component/signup'
import Home from './component/home'
import Dashboard from './component/dashboard'

const router = createBrowserRouter([
  {
    path : '/',
    element : <><Navbar/><Home/></>
  },
  {
    path : '/dashboard',
    element : <><Navbar/><Dashboard/></>
  },
  {
    path : '/login',
    element : <><Navbar/><Login/></>
  },
  {
    path : '/signup',
    element : <><Navbar/><Signup/></>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
