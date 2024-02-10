import Navbar from "./30 days/Day 1/Navbar";
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom";
import NavbarRoutes from "./30 days/Day 1/components/NavbarRoutes";
import Home from "./30 days/Day 1/components/Home";
import About from "./30 days/Day 1/components/About";
import Contact from "./30 days/Day 1/components/Contact";
import Skills from "./30 days/Day 1/components/Skills";
import Signup from "./30 days/Day 1/components/Signup";

function App() {

  const routes = createBrowserRouter([
    {
      element:<NavbarRoutes/>,
      children:[
        {
          path:"/",
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
          path:"/skills",
          element:<Skills/>
        },

        {
          path:"signup",
          element:<Signup/>
        }
      ]
    },
    
  ])
  return (
    <div className="App">
     <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
