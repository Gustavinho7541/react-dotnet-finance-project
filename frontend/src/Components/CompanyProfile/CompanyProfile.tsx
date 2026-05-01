import React from "react";
import { useOutletContext } from "react-router-dom";

const CompanyProfile = () => {
  const ticker = useOutletContext<string>();

  return (
    <div className="p-2">

      <h2 className="text-lg font-semibold mb-2">
        Company Profile ({ticker})
      </h2>

      <p className="text-sm text-gray-700">
        This section shows basic information about the company. Use the tabs
        on the left to explore financial data like income statement, balance
        sheet, and cash flow.
      </p>

    </div>
  );
};

export default CompanyProfile;