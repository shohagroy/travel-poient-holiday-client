import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvaider } from "../../GlobalContext/GobalContext";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const { user, userSignOut } = useContext(AuthProvaider);

  return (
    <div className="relative">
      <nav className="max-w-[1200px] mx-auto p-2 flex justify-between items-center relative">
        <Link to="/">
          <img
            className="h-[50px] md:h-[60px]"
            src="https://i.ibb.co/30XWx1n/logo.png"
            alt="Logo"
          />
        </Link>
        <div className="flex justify-center items-center">
          <div className={`mr-5 hidden md:block font-semibold`}>
            <NavLink className={`p-2 mx-2`} to="/">
              Home
            </NavLink>
            <NavLink to="/services" className={`p-2 mx-2`}>
              Services
            </NavLink>
            <NavLink
              to="/add-service"
              className={`p-2 mx-2 ${!user.email ? "hidden" : "inline"}`}
            >
              Add Service
            </NavLink>
            <NavLink
              to="/my-review"
              className={`p-2 mx-2 ${!user.email ? "hidden" : "inline"}`}
            >
              My Review
            </NavLink>
            <NavLink to="/blog" className={`p-2 mx-2`}>
              Blog
            </NavLink>

            <NavLink
              to="/login"
              className={`p-2 mx-2 ${user.email ? "hidden" : "inline"}`}
            >
              Login
            </NavLink>
            <button
              onClick={userSignOut}
              className={`p-2 mx-2 ${!user.email ? "hidden" : "inline"}`}
            >
              Log Out
            </button>
          </div>

          {/* menu button (hamburgar) */}
          <div>
            <button className="block md:hidden" onClick={() => setMenu(!menu)}>
              <span className={`${!menu ? "block" : "hidden"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </span>

              <span className={`${menu ? "block" : "hidden"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* small screen  */}
      <div className="absolute w-full  z-50 font-semibold">
        <div
          onClick={() => setMenu(!menu)}
          className={`flex justify-end py-5  bg-black/50 flex-col items-center w-full ${
            menu ? "block" : "hidden"
          }`}
        >
          <NavLink
            className={`py-4 text-3xl m-2  text-white w-full text-center`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={`py-4 text-3xl m-2  text-white w-full text-center`}
          >
            Services
          </NavLink>
          <NavLink
            to="/add-service"
            className={`py-4 text-3xl m-2  text-white w-full text-center ${
              !user.email ? "hidden" : "inline"
            }`}
          >
            Add Service
          </NavLink>
          <NavLink
            to="/my-review"
            className={`py-4 text-3xl m-2  text-white w-full text-center ${
              !user.email ? "hidden" : "inline"
            }`}
          >
            My Review
          </NavLink>
          <NavLink
            to="/blog"
            className={`py-4 text-3xl m-2  text-white w-full text-center`}
          >
            Blog
          </NavLink>

          <NavLink
            to="/login"
            className={`py-4 text-3xl m-2  text-white w-full text-center ${
              user.email ? "hidden" : "inline"
            }`}
          >
            Login
          </NavLink>
          <button
            onClick={userSignOut}
            className={`py-4 text-3xl m-2  text-white w-full  ${
              !user.email ? "hidden" : "inline"
            }`}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
