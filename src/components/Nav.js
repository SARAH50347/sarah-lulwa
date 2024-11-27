import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px- m:px-6 lg:px-8">
        <div className="flex items-center  h-16 ">
          <div className="flex items-center ">
            <div>
              <Link to="/" className="text-[#7D6EA9] justify-start ">
                <span className="font-semibold text-xl  text-purple">
                  Lavender Springs Bank
                </span>
              </Link>
            </div>
            <div className="flex space-x-4 mx-8  items-center justify-center">
              <NavLink
                to="/Home"
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
              <NavLink
                to="/Transaction"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transaction
              </NavLink>
              <NavLink
                to="/Users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              <NavLink
                to="/Profile"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
