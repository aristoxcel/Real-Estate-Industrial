import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import UpgradeUserProfile from "../pages/UpgradeUserProfile";
import DetailCard from "../pages/DetailCard";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router =createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {path:'/', element:<Home></Home>, loader:()=>fetch('/estates.json')},
        {path:'/details/:id', element:<PrivateRoute><DetailCard></DetailCard></PrivateRoute>, loader:()=>fetch('/estates.json')},
        {path:'/login', element: <Login></Login>},
        {path:'/userprofile', element:<PrivateRoute><UserProfile/></PrivateRoute>},
        {path:'/upgradeUserprofile', element:<PrivateRoute><UpgradeUserProfile/></PrivateRoute>},
        {path:'/Cart', element:<PrivateRoute><Cart/></PrivateRoute>},
        {path:'/About', element:<About/>},
        {path:'/Contact', element:<Contact/>},
      ]
    }
  ])
