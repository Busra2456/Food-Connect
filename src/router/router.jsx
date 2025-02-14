import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/Shared/About/About";
import Menu from "../Pages/Shared/Menu/Menu";
import Contact from "../Pages/Shared/Contact/Contact";

const router = createBrowserRouter([
      {
        path: "/",
        element:<Root></Root>,
        children:[{
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/About',
          element:<About></About>

        },
        {
          path:'/Menu',
          element:<Menu></Menu>

        },
        {
          path:'/Contact',
          element:<Contact></Contact>

        },
      
      ]
      },
    ]);
    export default router