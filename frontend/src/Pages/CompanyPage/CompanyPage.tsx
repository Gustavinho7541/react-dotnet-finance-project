import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getKeyMetrics } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Tile from "../../Components/Tile/Tile";
import CompFinder from "../../Components/CompFinder/CompFinder";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      if (!ticker) return;
      const result = await getKeyMetrics(ticker);
      setCompany(result);
    };

    fetchCompany();
  }, [ticker]);

  if (!company) return <div className="p-6">Carregando...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR (UMA VEZ SÓ) */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="flex-1 ml-64 p-6">

        {/* TÍTULO */}
        <h1 className="text-2xl font-bold mb-4">
          {company.name}
        </h1>

        {/* TILES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Tile title="Company Name" subTitle={company.name} />
          <Tile title="Symbol" subTitle={company.symbol} />
          <Tile title="Price" subTitle={"$"+ company.price || "-"} />
          <Tile title="DCF" subTitle="-" />
          <Tile title="Sector" subTitle={company.industry !== "N/A" ? company.industry : "-"} />
          <CompFinder ticker={company.symbol} />
          <TenKFinder ticker={company.symbol} />
          <p className="bg-white shadow rounded text-medim font-medium text-center p-4">{company.description}</p>
        </div>

        {/* CONTEÚDO DAS ROTAS */}
        <div className="bg-white p-4 rounded shadow">
          <Outlet context={ticker} />
        </div>

      </div>
    </div>
  );
};

export default CompanyPage;