import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UserProfile from "../pages/UserProfile";
import UpgradeUserProfile from "../pages/UpgradeUserProfile";
import DetailCard from "../pages/DetailCard";
import ErrorPage from "../pages/ErrorPage";

export const router =createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {path:'/', element:<Home></Home>, loader:()=>fetch('/estates.json')},
        {path:'/details/:id', element:<DetailCard></DetailCard>, loader:()=>fetch('/estates.json')},
        {path:'/login', element: <Login></Login>},
        {path:'/registration', element:<Registration/>},
        {path:'/userprofile', element:<UserProfile/>},
        {path:'/upgradeUserprofile', element:<UpgradeUserProfile/>},
      ]
    }
  ])
