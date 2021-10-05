import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  ;<Navbar />
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
