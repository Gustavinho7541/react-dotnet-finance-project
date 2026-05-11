import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getKeyMetrics } from "../../api";
import RatioList from "../../Components/RadioList/RadioList";
import Spinner from "../Spinner/Spinner";

type CompanySimple = {
  symbol: string;
  name: string;
  price: number;
  exchange: string;
  industry: string;
  website: string;
};

const tableConfig = [
  {
    label: "Symbol",
    render: (company: CompanySimple) => company.symbol,
  },
  {
    label: "Company Name",
    render: (company: CompanySimple) => company.name,
  },
  {
    label: "Price",
    render: (company: CompanySimple) => company.price || "-",
  },
  {
    label: "Exchange",
    render: (company: CompanySimple) => company.exchange || "-",
  },
  {
    label: "Industry",
    render: (company: CompanySimple) => company.industry || "-",
  },
  {
    label: "Website",
    render: (company: CompanySimple) => company.website || "-",
  },
];

const CompanyProfile = () => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanySimple | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getKeyMetrics(ticker);
      setCompanyData(result);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;