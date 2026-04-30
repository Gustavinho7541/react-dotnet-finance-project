import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getKeyMetrics } from "../api";
import RatioList from "../RadioList/RadioList";

type CompanyData = {
  symbol?: string;
  name?: string;
  exchange?: string;
  price?: string;
  industry?: string;
  website?: string;
};

// ✅ CONFIG
const tableConfig = [
  {
    label: "Company Name",
    render: (company: CompanyData) => company.name,
    subTitle: "Nome da empresa",
  },
  {
    label: "Symbol",
    render: (company: CompanyData) => company.symbol,
    subTitle: "Ticker da ação",
  },
  {
    label: "Exchange",
    render: (company: CompanyData) => company.exchange,
    subTitle: "Bolsa de valores",
  },
  {
    label: "Price",
    render: (company: CompanyData) => company.price,
    subTitle: "Preço atual da ação",
  },
  {
    label: "Industry",
    render: (company: CompanyData) => company.industry,
    subTitle: "Setor da empresa",
  },
];

const CompanyProfile = () => {
  const ticker = useOutletContext<string>(); // ✅ tipado corretamente
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!ticker) return;

      const result = await getKeyMetrics(ticker);
      setCompanyData(result);
    };

    loadData();
  }, [ticker]);

  return (
    <>
      {companyData ? (
        <div className="p-4">
          <RatioList config={tableConfig} data={companyData} />
        </div>
      ) : (
        <div className="p-4">Carregando...</div>
      )}
    </>
  );
};

export default CompanyProfile;