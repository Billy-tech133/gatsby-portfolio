import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { url, id, text } = link
            return (
              <Link to={url} key={id}>
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
