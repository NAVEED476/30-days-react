import React from 'react'
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './About';
import Contact from "./Contact";
import Signup from "./Signup";
import Home from "./Home";
import Navbar from '../Navbar';
const NavbarRoutes = () => {

    const routes = createBrowserRouter([
        
        {
            path:"/",
            element:<Navbar/>,
            children:[
                {
                    path:"/home",
                    element:<Home/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }, 
                {
                    path:"/signup",
                    element:<Signup/>
                }
            ]
        },
        
    ])
  return (
    <div>
        <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default NavbarRoutes;