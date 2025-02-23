import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Cards from "../Pages/Cards/Cards";
import About from "../Pages/Shared/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
      {
            path:"/",
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[{
                  path:"/",
                  element:<Home></Home>
            },
            {
                  path:"/Cards",
                  element:<Cards></Cards>
            },
            {
                  path:"/About",
                  element:<About></About>
            },
           
            {
                  path:"/About",
                  element:<About></About>
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
                  element:<PrivateRoute><Details></Details></PrivateRoute>
                  
        
                 
                  
                }
            
            
            
      ]
      }

])
export default router;