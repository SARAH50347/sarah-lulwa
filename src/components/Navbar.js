/*import React from "react";

function Nav() {
  return (
    <nav>
      <div className="Header">
        <h2>Lavender Springs Bank</h2>
        <h3 className="App-header-text">home</h3>
        <h3 className="App-header-text">transaction</h3>
        <h3 className="App-header-text">users</h3>
        <h3 className="App-header-text">profile</h3>
      </div>
      <div className="regitertion">
        <h3 className="App-header-text">logout</h3>
      </div>
    </nav>
  );
}
export default Nav;*/
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div>
              <Link to="/" className="text-[#7D6EA9] justify-start ">
                <span className="font-semibold text-xl  text-purple">
                  Lavender Springs Bank
                </span>
              </Link>
            </div>
            <div className="flex space-x-4 mx-8  items-center justify-center">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "#7D6EA9",
                    color: isActive ? "#7D6EA9" : "white",
                  };
                }}
                className="text-purple-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-large"
              >
                Home
              </NavLink>
              {/* <NavLink
                to="/Transaction"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transaction
              </NavLink>
              <NavLink
                to="/users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink> */}

              <>
                <NavLink
                  to="/register"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "#7D6EA9",
                      color: isActive ? "#7D6EA9" : "white",
                    };
                  }}
                  className="text-purple-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </NavLink>

                <NavLink
                  to="/login"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "#7D6EA9",
                      color: isActive ? "#7D6EA9" : "white",
                    };
                  }}
                  className="text-purple-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
