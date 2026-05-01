import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBuilding, FaChartLine, FaBalanceScale, FaHome } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    {
      path: "company-profile",
      label: "Company Profile",
      icon: <FaBuilding />,
    },
    {
      path: "income-statement",
      label: "Income Statement",
      icon: <FaChartLine />,
    },
    {
      path: "balance-sheet",
      label: "Balance Sheet",
      icon: <FaBalanceScale />,
    },
      {
      path: "cashflow-statement",
      label: "cashflow Statement",
      icon: <FaHome />,
    },
  ];

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-4">
      <ul className="space-y-2">
        {menu.map((item) => {
          const isActive = location.pathname.includes(item.path);

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md transition
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;