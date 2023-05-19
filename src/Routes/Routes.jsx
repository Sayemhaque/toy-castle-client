import { createBrowserRouter } from "react-router-dom";
import Layout from "../Loayout/Layout";
import Home from "../Pages/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import Mytoys from "../Pages/MyToys/Mytoys";
import AllToys from "../Pages/AllToys/AllToys";
import Addtoy from "../Pages/AddToy/Addtoy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registation/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy/UpdateToy";
import PageNotFound from "../Pages/404 page/PageNotFound";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<PageNotFound/>,
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
          element:<PrivateRoute><Mytoys/></PrivateRoute>
        },
        { 
          path:"alltoys",
          element:<PrivateRoute><AllToys/> </PrivateRoute>,
        },
        { 
          path:"addtoy",
          element:<PrivateRoute><Addtoy/></PrivateRoute>
        },
        { 
          path:"login",
          element:<Login/>
        },
        { 
          path:"register",
          element:<Register/>
        },
        { 
          path:"toydetail/:id",
          element:<PrivateRoute><ToyDetails/></PrivateRoute>,
          loader:({params}) => fetch(`https://toy-castle.vercel.app/toydetail/${params.id}`)
        },
        { 
          path:"update/:id",
          element:<UpdateToy/>,
          loader:({params}) => fetch(`https://toy-castle.vercel.app/toydetail/${params.id}`)
        }
    ]
  }
])

export default router;