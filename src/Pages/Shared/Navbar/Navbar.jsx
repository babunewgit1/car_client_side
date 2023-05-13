import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg";
import { AuthContext } from "../../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, allSignOut } = useContext(AuthContext);

  const logoutUser = () => {
    allSignOut()
      .then(() => {
        toast.success("Logout successfull!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mycontainer py-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/contact">Contact</Link>
              </li>
              {user && (
                <li className="hover:bg-secondary hover:text-white">
                  <Link to="/booking">Booking</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/">
            <img className="w-[80px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="hover:bg-secondary hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-secondary hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-secondary hover:text-white">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:bg-secondary hover:text-white">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-secondary hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
            {user && (
              <li className="hover:bg-secondary hover:text-white">
                <Link to="/booking">Booking</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="userPresent flex item-center gap-5">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={logoutUser}
                className="btn btn-secondary rounded-none px-6"
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn btn-secondary rounded-none px-6">
                Login
              </button>
            </Link>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Navbar;
