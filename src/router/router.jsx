import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/Shared/About/About";
import Menu from "../Pages/Shared/Menu/Menu";
import Contact from "../Pages/Shared/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Cards from "../Pages/Cards/Cards";
import Details from "../Pages/Details/Details";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
      {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[{
            path:'/',
            element:<Home></Home>,
           
           
            
        },
        {
          path:'/Cards',
         
          element:<Cards></Cards>,
         
         
          
          

        },
        {
          path:'/About',
          element:<About></About>

        },
        {
          path:'/Menu',
          loader:() =>  fetch('../cards.json'),
          element:<Menu></Menu>

        },
        {
          path:'/Contact',
          element:<PrivateRoute><Contact></Contact></PrivateRoute>

        },
        {
          path:'/Login',
          element:<Login></Login>

        },
        {
          path:'/Register',
          element:<Register></Register>

        },
        {
          path:'/card/:id',
          loader:() =>  fetch('../cards.json'),
          element:<Details></Details>
          

         
          
        }
      
      
      
      ]
      },
    ]);
    export default router