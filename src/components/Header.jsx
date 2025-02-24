import React from "react";
import cute_robo from "../assets/cute-robot-chef-rb.png";

const Header = () => {
  return (
    <header className="bg-[#ccd5ae] h-24 flex justify-center items-center gap-1 mx-3 mt-3 rounded-md shadow-sm">
      <img src={cute_robo} alt="logo" className="w-32" />
      <h1 className="text-4xl font-bold offside-regular">YumAI</h1>
    </header>
  );
};

export default Header;
