import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import { getKeyMetrics } from "../../api";
import Sidebar from "../../Sidebar/Sidebar";
import CompanyDashboard from "../../CompanyDashboard/CompanyDashboard";
import Title from "../../Title/Title";

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

      const result = await getKeyMetrics(ticker); // ✅ CORRETO
      setCompany(result);

      console.log("Ticker:", ticker);
      console.log("API RESULT:", result);
    };

    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex overflow-x-hidden">
          
          <Sidebar />

          <CompanyDashboard ticker={ticker || ""}>
            <Title title="Company Name" subtitle={company.name} />
          </CompanyDashboard>

          {/* MAIN */}
          <div className="relative md:ml-64 w-full">

            {/* HEADER */}
            <div className="pt-20 pb-32 bg-lightBlue-500 text-white">
              <div className="px-6">
                <h1 className="text-3xl font-bold">
                  {company.name}
                </h1>
                <p>{company.industry}</p>
                <p>{company.exchange}</p>
              </div>
            </div>

            {/* CARDS */}
            <div className="p-6">
              <div className="flex flex-wrap">

                {/* CARD 1 */}
                <div className="w-full lg:w-3/12 px-4">
                  <div className="bg-white rounded shadow p-4">
                    <h5 className="text-xs font-bold uppercase">Symbol</h5>
                    <span className="text-xl">{company.symbol}</span>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="w-full lg:w-3/12 px-4">
                  <div className="bg-white rounded shadow p-4">
                    <h5 className="text-xs font-bold uppercase">Industry</h5>
                    <span className="text-xl">{company.industry}</span>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="w-full lg:w-3/12 px-4">
                  <div className="bg-white rounded shadow p-4">
                    <h5 className="text-xs font-bold uppercase">Exchange</h5>
                    <span className="text-xl">{company.exchange}</span>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="w-full lg:w-3/12 px-4">
                  <div className="bg-white rounded shadow p-4">
                    <h5 className="text-xs font-bold uppercase">Price</h5>
                    <span className="text-xl">{company.price}</span>
                  </div>
                </div>

                {/* CARD 5 */}
                <div className="w-full lg:w-3/12 px-4 mt-4">
                  <div className="bg-white rounded shadow p-4">
                    <h5 className="text-xs font-bold uppercase">Website</h5>
                    <span className="text-sm break-all">
                      {company.website}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="p-6">Carregando...</div>
      )}
    </>
  );
};



export default CompanyPage;