import React from "react";
import { useOutletContext } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CompanyProfile = () => {
  const ticker = useOutletContext<string>();

  return (
    <div className="p-2">

      <h2 className="text-lg font-semibold mb-2">
        Company Profile ({ticker})
      </h2>

      <p className="text-sm text-gray-700">
        This section shows basic information about the company.
      </p>

      <Spinner />

    </div>
  );
};

export default CompanyProfile;