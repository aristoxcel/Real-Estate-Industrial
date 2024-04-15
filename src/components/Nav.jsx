import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";


function Nav() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="border">
      <div className="navbar bg-base-300 ">
        <h1 className="font-franklin text-3xl lg:text-5xl font-semibold lg:font-extrabold mx-auto  bg-gradient-to-r from-[#2596BE] via-green-500 to-[#2596BE] text-transparent bg-clip-text ">
          Landmark Industrial Group
        </h1>
      </div>

      <div className="navbar bg-sky-50">
        <div className="navbar-start lg:w-0 ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn  ring-2 ring-offset-2 hover:bg-[#2596BE] hover:text-white lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 hover:h-6 w-5 hover:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow rounded-box w-72 bg-info-500"
            >
              <li>
                <NavLink to={"/"} className="text-base  font-semibold bg-[#2596BE] mb-1 text-white hover:text-black ">Home</NavLink>
              </li>
              {user && (
                <li>
                  <a className="text-base font-semibold bg-[#2596BE] opacity-90 text-white hover:text-black">Profile</a>
                  <ul className="p-2">
                    <li>
                      <NavLink to={"/userprofile"} className="text-base font-semibold bg-[#2596BE] opacity-90 mb-1 text-white hover:text-black">View Profile</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/upgradeUserprofile"}className="text-base font-semibold  bg-[#2596BE] opacity-90 text-white hover:text-black">
                        Upgrade Profile
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden mx-auto lg:flex w-4/5 lg:justify-between ">
          <ul className="menu  menu-horizontal px-1">
            <li>
              <NavLink to={"/"} className="text-lg font-semibold  bg-[#2596BE]  text-white hover:text-black mr-2">Home</NavLink>
            </li>
            {user && (
              <li>
                <details className="bg-none">
                  <summary className="text-lg font-semibold  bg-[#2596BE]  text-white hover:text-black ">Profile</summary>
                  <ul className="p-2 z-[999] w-72">
                    <li>
                      <NavLink to={"/userprofile"} className="text-base font-semibold  bg-[#2596BE]  text-white hover:text-black opacity-80 mb-1">View Profile</NavLink>
                    </li>
                    <li >
                      <NavLink to={"/upgradeUserprofile"} className="text-base font-semibold  bg-[#2596BE]  text-white hover:text-black opacity-80">
                        Upgrade Profile
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
          <div className="navbar-end  lg:flex  hidden">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
             <div className="tooltip w-10 hover:ring-2 hover:ring-offset-2 rounded-full" data-tip="name">
                <img src={user?.photoURL || "logo.png"} alt="" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow rounded-box w-44 "
              >
                <li>
                  <NavLink className=" bg-[#2596BE] text-white font-semibold capitalize mb-1">{user?.displayName || "User Name"}</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" bg-[#2596be] hover:bg-[#7f63c6] text-white font-semibold "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) 
          : user?.displayName ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "logo.png"} alt="" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <NavLink className=" bg-[#2596BE] text-white font-franklin hover:bg-">{user?.displayName || "User Name"}</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" bg-[#7f63c6] text-white font-semibold  font-franklin"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) 
          :(
            <NavLink
              to={"/login"}
              className="btn bg-[#2596BE] text-white text-base font-semibold "
            >
              Login
            </NavLink>
          )
           }
        </div>
        </div>
        <div className="navbar-end lg:hidden">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "logo.png"} alt="" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow rounded-box w-44 "
              >
                <li>
                  <NavLink className=" bg-[#2596BE] text-white font-semibold capitalize mb-1">{user?.displayName || "User Name"}</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" bg-[#2596be] hover:bg-[#7f63c6] text-white font-semibold "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) 
          : user?.displayName ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "logo.png"} alt="" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-44"
              >
                <li>
                  <NavLink className=" bg-[#2596BE] text-white font-franklin hover:bg-">{user?.displayName || "User Name"}</NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className=" bg-[#7f63c6] text-white font-semibold  font-franklin"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) 
          :(
            <NavLink
              to={"/login"}
              className="btn bg-[#2596BE] text-white font-semibold "
            >
              Login
            </NavLink>
          )
           }
        </div>
      </div>
    </div>
  );
}

export default Nav;
