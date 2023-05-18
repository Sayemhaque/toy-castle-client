import { createBrowserRouter } from "react-router-dom";
import Layout from "../Loayout/Layout";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import Mytoys from "../Pages/MyToys/Mytoys";
import AllToys from "../Pages/AllToys/AllToys";
import Addtoy from "../Pages/AddToy/Addtoy";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<p>Error page</p>,
    children:[
        { 
          path:"/",
          element:<Home/>
        },
        { 
          path:"blog",
          element:<Blog/>
        },
        { 
          path:"mytoys",
          element:<Mytoys/>
        },
        { 
          path:"alltoys",
          element:<AllToys/>
        },
        { 
          path:"addtoy",
          element:<Addtoy/>
        },
        { 
          path:"toydetails",
          element:<ToyDetails/>
        }
    ]
  }
])

export default router;