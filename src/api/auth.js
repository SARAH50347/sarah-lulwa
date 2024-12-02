import instance from "./api";
import { setToken } from "./storage";
import React, { createContext, useContext, useState } from "react";

const register = async (formData) => {
  console.log("formData", formData);
  const data = await instance.post("/mini-project/api/auth/register", formData);
  localStorage.setItem("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/login", formData);
  localStorage.setItem("token", data.token);
  console.log("login data", data);
  return data;
};
const getAllUsers = async () => {
  const data = await instance.get("/mini-project/api/auth/users");
  return data;
};
const getMyProfile = async () => {
  const data = await instance.get("/mini-project/api/auth/me");
  return data;
};
const transaction = async () => {
  const data = await instance.get("/mini-project/api/transactions/my");
  return data;
};
const updateYourProfile = async () => {
  const data = await instance.get("/mini-project/api/auth/profile");
  return data;
};
const getUserInfo = async (User) => {
  const res = await instance.get(`/mini-project/api/auth/user/${User}`);
  return res.data;
};
export {
  login,
  register,
  getAllUsers,
  getMyProfile,
  transaction,
  updateYourProfile,
  getUserInfo,
};
