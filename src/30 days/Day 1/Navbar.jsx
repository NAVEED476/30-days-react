// creating a responsive navbar
import React,{useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  return (
    <nav className="navbar-cont">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu" onClick={()=>{
        setIsmenuOpen(!isMenuOpen)
      }}>
      <span></span>
      <span></span>
      <span></span>
      </div>
      <div className="links">
        <ul className={isMenuOpen ? "open" : "" }>
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
