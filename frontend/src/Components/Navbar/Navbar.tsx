import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 font-bold">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
            <a href="#" className="text-black hover:text-darkBlue">
              Login
            </a>
          </div>
        </div>

        <a
          href="#"
          className="hidden lg:block px-6 py-2 font-bold rounded text-white bg-lightGreen hover:bg-darkBlue"
        >
          Signup
        </a>

      </div>
    </nav>
  );
};

export default Navbar;