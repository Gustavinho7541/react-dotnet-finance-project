import React from "react";
import { Link } from "react-router-dom";
import { CompanyTenK } from "../../../company";

type Props = {
  tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
  const fillingYear = new Date(tenK.fillingDate).getFullYear();

  return (
    <Link
      to={tenK.finalLink}
      target="_blank"
      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm rounded-md bg-white hover:bg-gray-50"
    >
      10K - {tenK.symbol} - {fillingYear}
    </Link>
  );
};

export default TenKFinderItem;