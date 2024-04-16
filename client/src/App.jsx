import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Error from './pages/Error'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Header from './components/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import SingleListing from './pages/SingleListing'
import { Toaster } from 'react-hot-toast'
import Cart from './pages/Cart'
import Account from './pages/Account'


export default function App() {
  function PageLayOut() {
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
  }
  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayOut />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/abouts",
          element: <About />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/listing",
          element: <Listing />
        },
        {
          path: "/listing/:id",
          element: <SingleListing />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/blogs",
          element: <Blog />
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/contacts",
          element: <Contact />
        },

      ]
    },

    {
      path: "*",
      element: <Error />
    }

  ])
  return (
    <div className="bg-white">
      <Toaster/>
        <RouterProvider router={pageRoutes}></RouterProvider>
     
    </div>
  )
}
