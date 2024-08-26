import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className=" py-3 mb-4 lg:mb-0">
        <div className="flex items-center justify-between">
          <div className="w-[100px] h-auto ">
            <img src={logo} className="w-full h-auto object-contain" alt="" />
          </div>
          <div>
            <button className="px-8 py-3 border border-[brown]">Invest</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
