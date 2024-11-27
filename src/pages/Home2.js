import React from "react";
import logo from "../logo.png";
const Home2 = () => {
  return (
    <div className="bg-[#BDB8DB] text-white min-h-screen flex items-center justify-center">
      <div className="text-[#314455] max-w-3xl text-center m-10">
        <h1 className="text-6xl font-bold mb-8">Lavender Springs Bank</h1>
        <img
          src={logo}
          className="px-25 py-10 m-10 size-85 drop-shadow-[#314455]-2xl "
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Home2;
