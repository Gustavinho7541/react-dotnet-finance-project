import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { getIncomeStatement } from "../api";

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
      const result = await getIncomeStatement(ticker);
      setData(result);
    };

    fetchData();
  }, [ticker]);

  return <Table config={config} data={data} />;
};

export default IncomeStatement;

const formatMoney = (v: number) =>
  "$ " + v.toLocaleString();