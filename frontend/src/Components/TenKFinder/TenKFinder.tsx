import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import { getTenK } from "../../api";
import { CompanyTenK } from "../../company";

type Props = {
  ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>([]);

  useEffect(() => {
    const getTenKData = async () => {
      if (!ticker) return;

      const value = await getTenK(ticker);
      setCompanyData(value); // ✅ agora correto
    };

    getTenKData();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4 gap-2">
      {companyData.length > 0 ? (
        companyData.slice(0, 5).map((tenK, index) => (
          <TenKFinderItem key={index} tenK={tenK} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;