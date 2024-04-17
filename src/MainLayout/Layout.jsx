import { useEffect } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet, useLocation } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Layout() {

  // dynamic title
  const loc= useLocation();
  useEffect(()=>{
    if (loc.pathname==='/') {
      document.title= 'Landmark | Home'
    }
    else {
      document.title = `Landmark  ${loc.pathname.replace('/', '| ')}`
    }
    if (loc.pathname==='/upgradeUserprofile') {
      document.title= 'Landmark | Profile Upgrade Page'
    }
    if (loc.pathname==='/userprofile') {
      document.title= 'Landmark | Profile Page'
    }
    if (loc.state) {
      document.title= `Landmark || ${loc.state}`;
    }
  },[loc.pathname, loc.state]);
  return (
    <div>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default Layout