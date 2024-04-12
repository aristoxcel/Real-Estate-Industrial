import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context"


function Nav() {

  const { user, logout }= useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = ()=>{
    logout()
    navigate('/login')
  }
  return (
    <div className="border">
        <div className="navbar bg-base-300 ">
        <h1 className="font-franklin text-3xl lg:text-5xl font-semibold lg:font-extrabold mx-auto">Landmark Industrial Group</h1>
        </div>

        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-96">
      <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
          <a>Profile</a>
          <ul className="p-2">
            <li ><NavLink to={'/userprofile'}>View Profile</NavLink></li>
            <li ><NavLink to={'/upgradeUserprofile'}>Upgrade Profile</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
        <details>
          <summary>Profile</summary>
          <ul className="p-2 z-[999] w-72">
            <li><NavLink to={'/userprofile'}>View Profile</NavLink></li>
            <li><NavLink to={'/upgradeUserprofile'}>Upgrade Profile</NavLink></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">

    {
      user? <>
       <NavLink to={'/login'} className="w-14 bg-[#2596BE] rounded-full flex justify-center items-center"><img className="w-12 rounded-full" src={"logo.png"} alt="" />{user.email}</NavLink>
       <button onClick={handleLogout} className="btn bg-[#7f63c6] text-white font-semibold ">Logout</button>
      </>:
      <NavLink to={'/login'} className="btn bg-[#2596BE] text-white font-semibold ">Login</NavLink>
    }
  
  </div>
</div>
    </div>
  )
}

export default Nav