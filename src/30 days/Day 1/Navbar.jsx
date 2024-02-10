// creating a responsive navbar
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar-cont">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="links">
        <ul>
          <NavLink
            to="/about"
            activeClassName="activeNavLink"
            style={{ textDecoration: "none" }}
          >
            <li>About</li>
          </NavLink>
          <NavLink to="/skills"
           activeClassName="activeNavLink"
           style={{ textDecoration: "none" }}>
            <li>Skills</li>
          </NavLink>
          <NavLink to="/contact"
           activeClassName="activeNavLink"
          style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </NavLink>
          <NavLink to="/signup" 
           activeClassName="activeNavLink"
          style={{ textDecoration: "none" }}>
            <li>SignUp</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
