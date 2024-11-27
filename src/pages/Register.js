import React, { useState } from "react";
import logo from "../logo.png";
import { register } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  // const [query, setQuery] = useState("Register");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    mutate();
  };

  return (
    <div className="bg-[#B1A8D5] min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="flex px-20 py-5 m-10">
        <div className="px-20 py-5 m-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-lg m-20">
          <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
          <p className="block text-white text-sm font-medium mb-2">
            If you already have an account,{" "}
            <Link
              className="text-purple-400 underline hover:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/login"
            >
              {" "}
              login
            </Link>
            .
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="">
              <label
                htmlFor="username"
                className="block text-white text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Type your name here.."
              />
            </div>
            <div className="mb-4"></div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Type your Password here.."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-white text-sm font-medium mb-2"
              >
                Profile Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-[#B1A8D5]  text-white rounded-md hover:bg-[#7D6EA9]  transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
