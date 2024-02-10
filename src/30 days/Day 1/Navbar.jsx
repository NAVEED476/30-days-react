// creating a responsive navbar
import React from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar-cont'>
      <div className='logo'>
        <h1>Logo</h1>
      </div>
      <div className='links'>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"> <li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/signup"><li>SignUp</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar