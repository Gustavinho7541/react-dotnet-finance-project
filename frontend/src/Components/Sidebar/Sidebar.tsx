import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex flex-col md:z-10 z-50 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
      
      <div className="flex flex-col w-full h-full overflow-y-auto">

        {/* Company Profile */}
        <Link
          to="company-profile"
          className="flex items-center text-gray-600 text-sm uppercase font-bold py-3 no-underline"
        >
          <FaHome />
          <span className="ml-3">Company Profile</span>
        </Link>

        {/* Income Statement */}
        <Link
          to="income-statement"
          className="flex items-center text-gray-600 text-sm uppercase font-bold py-3 no-underline"
        >
          <FaHome />
          <span className="ml-3">Income Statement</span>
        </Link>

        {/* Balance Sheet */}
        <Link
          to="balance-sheet"
          className="flex items-center text-gray-600 text-sm uppercase font-bold py-3 no-underline"
        >
          <FaHome />
          <span className="ml-3">Balance Sheet</span>
        </Link>

        {/* Cashflow */}
        <Link
          to="cashflow-statement"
          className="flex items-center text-gray-600 text-sm uppercase font-bold py-3 no-underline"
        >
          <FaHome />
          <span className="ml-3">Cashflow Statement</span>
        </Link>

        {/* Dividend */}
        <Link
          to="historical-dividend"
          className="flex items-center text-gray-600 text-sm uppercase font-bold py-3 no-underline"
        >
          <FaHome />
          <span className="ml-3">Historical Dividend</span>
        </Link>

      </div>
    </nav>
  );
};

export default Sidebar;