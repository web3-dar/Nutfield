import React from "react";
import hero from "../assets/hero_bg.jpg";

const Hero = () => {
  return (
    <>
      <div className="lg:flex justify-between items-center  mb-20">
        <div className="flex flex-col gap-2 lg:gap-6 md:w-[50%] w-full mb-6 lg:mb-0">
          <p className="text-3xl lg:text-5xl text-[#f58888]">
            IT'S TIME TO GROW.
          </p>
          <p className="text-xl text-gray-500">
            Your vision. Your community. Your Nutfield.
          </p>
          <p className="text-medium  text-gray-500">
            Start growing with the power of Nutfield complete vertical farming
            platform
          </p>
          <div>
            <button className="px-8 py-3 border border-[brown]">
              Grow Now
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-auto">
          <img src={hero} className="w-full h-auto" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
