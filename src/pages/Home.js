import React from "react";
import logo from "../logo.png";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#BDB8DB] text-white min-h-screen flex items-center justify-center">
        <div className="text-[#314455] max-w-3xl text-center m-10">
          <h1 className="text-6xl font-bold mb-8">Lavender Springs Bank</h1>
          <p className=" text-2xl leading-relaxed text-center">
            Where Financial Dreams Blossom Amidst Serenity
          </p>
          <p className="text-2xl leading-relaxed text-center">
            Discover the Essence of Trust at Lavender Springs Bank
          </p>
          <img
            src={logo}
            className="px-25 py-10 m-10 size-85 drop-shadow-[#314455]-2xl "
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
