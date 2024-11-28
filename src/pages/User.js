import React from "react";

const User = ({ user }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{user.username}</h1>
      <img
        src={user.image}
        alt={`${user.name}-image`}
        className="w-[200px] rounded-md
      "
      />
      <h3 className="text-md font-bold">{user.amount}</h3>
      <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-[#B1A8D5] transition-colors ">
        Tarnsfer
      </button>
    </div>
  );
};

export default User;
