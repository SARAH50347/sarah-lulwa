import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true); // Example state

  const logout = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
    navigate("/"); // Redirect after logout
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 m:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div>
              <Link to="/" className="text-[#7D6EA9] justify-start">
                <span className="font-semibold text-xl text-purple">
                  Lavender Springs Bank
                </span>
              </Link>
            </div>
            <div className="flex space-x-4 mx-8 items-center justify-center">
              <NavLink
                to="/Home2"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "white" : "#7D6EA9",
                  color: isActive ? "#7D6EA9" : "white",
                })}
                className="text-purple-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-large"
              >
                Home
              </NavLink>
              <NavLink
                to="/Transaction"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "#7D6EA9",
                    color: isActive ? "#7D6EA9" : "white",
                  };
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transaction
              </NavLink>
              <NavLink
                to="/Users"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "#7D6EA9",
                    color: isActive ? "#7D6EA9" : "white",
                  };
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              <NavLink
                to="/Profile"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "#7D6EA9",
                    color: isActive ? "#7D6EA9" : "white",
                  };
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </NavLink>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "white" : "#7D6EA9",
                    color: isActive ? "#7D6EA9" : "white",
                  };
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={logout}
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
