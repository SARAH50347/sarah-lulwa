import React, { useState, useSyncExternalStore } from "react";
import Input from "../components/Input.js";
import User from "./User";
import Modal from "../components/Modal";
import { getAllUsers } from "../api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Nav from "../components/Nav";
const Users = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data, isFetching, isSuccess, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const userList = data?.map((user) => <User user={user} key={user._id} />);
  return (
    <>
      <Nav />
      <div className="bg-[#B1A8D5] flex flex-col justify-center items-center ">
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {userList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Users;
