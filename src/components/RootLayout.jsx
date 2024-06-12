import React from 'react'
import Header from './Header'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>

    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
    <ScrollRestoration/>
    </>
  )
}

export default RootLayout
