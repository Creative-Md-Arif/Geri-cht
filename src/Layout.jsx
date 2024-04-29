/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
   <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default Layout