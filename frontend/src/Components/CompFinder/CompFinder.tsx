import React, { useEffect, useState } from "react";
import { CompanyCompData } from "../../company";
import { getCompData } from "../api";
import CompFinderItem from "../CompFinder/CompFinderItem/CompFinderItem";

type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData | null>(null);

  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      setCompanyData(value); // ✅ CORRETO (sem .data)
    };

    getComps();
  }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData?.peersList?.map((peer: string) => (
        <CompFinderItem key={peer} ticker={peer} />
      ))}
    </div>
  );
};

export default CompFinder;