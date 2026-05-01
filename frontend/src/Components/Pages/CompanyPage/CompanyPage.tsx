import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";

import { getKeyMetrics } from "../../api";
import Sidebar from "../../Sidebar/Sidebar";

type CompanySimple = {
  symbol: string;
  name: string;
  exchange: string;
  price: string;
  industry: string;
  website: string;
};

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanySimple | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) return;

      const result = await getKeyMetrics(ticker);
      setCompany(result);
    };

    getProfileInit();
  }, [ticker]);

  if (!company) return <div className="p-6">Carregando...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* CONTEÚDO */}
      <div className="flex-1 p-6">

        {/* 🔥 REMOVIDO HEADER AZUL */}

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          <Card title="Symbol" value={company.symbol} />
          
          {/* 👇 só mostra se tiver dado */}
          {company.industry !== "N/A" && (
            <Card title="Industry" value={company.industry} />
          )}

          {company.exchange && (
            <Card title="Exchange" value={company.exchange} />
          )}

          {company.price && (
            <Card title="Price" value={company.price} />
          )}

          {company.website !== "N/A" && (
            <Card title="Website" value={company.website} />
          )}

        </div>

        {/* CONTEÚDO (Income / Balance / Profile) */}
        <div className="bg-white p-4 rounded shadow">
          <Outlet context={ticker} />
        </div>

      </div>
    </div>
  );
};

const Card = ({ title, value }: any) => (
  <div className="bg-white p-4 rounded shadow">
    <h5 className="text-xs font-bold uppercase text-gray-500">{title}</h5>
    <p className="text-lg font-semibold text-gray-800">{value}</p>
  </div>
);

export default CompanyPage;