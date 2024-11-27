import React, { useState } from "react";
import logo from "../logo.png";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
const Login = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    mutate();
    onSuccess: () => {
      setUser();
  };

  return (
    <div>
      <div className="bg-gray-400 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className="flex px-20 py-5 m-10">
          <div className="px-20 py-5 m-10">
            <img src={logo} alt="logo" />
          </div>

          <div className="max-w-md w-full px-6 py-8 bg-[#7D6EA9] rounded-md shadow-lg m-20">
            <h2 className="text-3xl text-white font-semibold mb-6">Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
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
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Type your Password here.."
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-[#B1A8D5] transition-colors "
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// const [userInfo, setUserInfo] = useState({});

// const handleChange = (e) => {
//   setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// };

// const handleFormSubmit = (e) => {
//   e.preventDefault();
//   // Add login logic here
//   const { mutate } = useMutation({
//     mutationKey: ["login"],
//     mutationFn: () => login(userInfo),
//   });

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     mutate();
//   };
// };
