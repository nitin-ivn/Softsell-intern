import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default layout