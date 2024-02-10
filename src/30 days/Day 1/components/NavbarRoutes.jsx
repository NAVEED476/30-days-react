import React from 'react'
import {Link, createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from './About';
import Contact from "./Contact";
import Signup from "./Signup";
import Home from "./Home";
import Navbar from '../Navbar';

const NavbarRoutes = () => {

  
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default NavbarRoutes;