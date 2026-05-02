import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { getIncomeStatement } from "../../api";
import Spinner from "../Spinner/Spinner"; // ✅ IMPORTAR

type Income = {
  date: string;
  revenue: number;
  netIncome: number;
};

const config = [
  { label: "Date", render: (c: Income) => c.date },
  { label: "Revenue", render: (c: Income) => formatMoney(c.revenue) },
  { label: "Net Income", render: (c: Income) => formatMoney(c.netIncome) },
];

const IncomeStatement = () => {
  const ticker = useOutletContext<string>();
  const [data, setData] = useState<Income[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getIncomeStatement(ticker);
      setData(result);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      {data.length > 0 ? (
        <Table config={config} data={data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default IncomeStatement;

const formatMoney = (v: number) =>
  "$ " + v.toLocaleString();