import React from "react";
// images
import Logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#" className="lg:w-12 w-8 flex gap-x-3 items-center">
            <img src={Logo} alt="" />
            <h1 className="font-signature lg:text-4xl text-2xl">Radenagus17_</h1>
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
