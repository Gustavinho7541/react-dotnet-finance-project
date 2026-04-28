import React from "react";
import logo from "./logo.png"

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        
        {/* Logo + Menu */}
        <div className="flex items-center space-x-6">
          {/* Ajusta o caminho do logo */}
          <img src="/logo.png" alt="Logo" className="h-8" />

          <div className="hidden lg:flex items-center space-x-6 font-bold">
            <a href="#" className="text-black hover:text-darkBlue">
              Dashboard
            </a>
            <a href="#" className="text-black hover:text-darkBlue">
              Login
            </a>
          </div>
        </div>

        {/* Botão */}
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