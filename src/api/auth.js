import instance from "./api";
import { setToken } from "./storage";

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
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, getAllUsers };
