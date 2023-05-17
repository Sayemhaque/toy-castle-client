import { createBrowserRouter } from "react-router-dom";
import Layout from "../Loayout/Layout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<p>Error page</p>,
    children:[
        { 
          path:"/",
          element:<Home/>
        }
    ]
  }
])

export default router;