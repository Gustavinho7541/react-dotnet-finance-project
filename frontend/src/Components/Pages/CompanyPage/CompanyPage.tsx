import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getKeyMetrics } from "../../../api";
import Sidebar from "../../Sidebar/Sidebar";
import Tile from "../../Tile/Tile";
import CompFinder from "../../CompFinder/CompFinder";
import TenKFinder from "../../TenKFinder/TenKFinder";

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
          <Tile title="Symbol" subTitle={company.symbol} />
          <Tile title="Price" subTitle={company.price || "-"} />
          <Tile title="Sector" subTitle={company.industry !== "N/A" ? company.industry : "-"} />
          <Tile title="DCF" subTitle="-" />
          <Tile title="Market Cap" subTitle={company.marketCap || "-"} />
          <CompFinder ticker={company.symbol} />
          <TenKFinder ticker={company.symbol} />
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