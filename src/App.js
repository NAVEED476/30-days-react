import Navbar from "./30 days/Day 1/Navbar";
import {Link, createBrowserRouter, RouterProvider} from "react-router-dom";
import NavbarRoutes from "./30 days/Day 1/components/NavbarRoutes";
import Home from "./30 days/Day 1/components/Home";
import About from "./30 days/Day 1/components/About";
import Contact from "./30 days/Day 1/components/Contact";
import Skills from "./30 days/Day 1/components/Skills";
import Signup from "./30 days/Day 1/components/Signup";
import Counter from "./30 days/Day 2/React/Counter";
import Users from "./30 days/Day 3/React/Users";
import PracticeUsers from "./30 days/Day 4/practice-react/PracticeUsers";
import FetchData from "./30 days/Day 5/React/FetchData";
import Listing from "./30 days/Day 6/React/Listing";
import InputComp from "./30 days/Day 7/React/InputComp"


function App() {

  // const routes = createBrowserRouter([
  //   {
  //     element:<NavbarRoutes/>,
  //     children:[
  //       {
  //         path:"/",
  //         element:<Home/>
  //       },
  //       {
  //         path:"/about",
  //         element:<About/>
  //       },
  //       {
  //         path:"/contact",
  //         element:<Contact/>
  //       },
  //       {
  //         path:"/skills",
  //         element:<Skills/>
  //       },

  //       {
  //         path:"signup",
  //         element:<Signup/>
  //       }
  //     ]
  //   },
    
  // ])
  return (
    <div className="App">
     {/* <RouterProvider router={routes}/> */}
     {/* <Counter/> */}
     {/* <Users/> */}
     {/* <PracticeUsers/> */}
     {/* <FetchData/> */}
     {/* <Listing/> */}
     <InputComp/>
    </div>
  );
}

export default App;
