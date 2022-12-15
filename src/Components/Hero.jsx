import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import beachVid from "../Assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1>First Class Travel</h1>
          <h2 className="py-4">Top 1% Locations worldwide</h2>
          <form className="flex justify-between max-w-[700px] w-full items-center mx-auto border p-1 rounded-md text-black bg-gray-100">
            <div>
              <input className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none" type="text" placeholder="Search Destinations" />
            </div>
            <div>
                <button><AiOutlineSearch className="icon" style={{color:'#ffffff'}} /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
