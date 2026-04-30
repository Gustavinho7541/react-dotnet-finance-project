import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { getIncomeStatement } from "../api";

// ✅ tipo compatível com seu mock
type IncomeStatementSimple = {
  date: string;
  revenue: number;
  netIncome: number;
};

// ✅ config alinhado com o tipo correto
const configs = [
  {
    label: "Date",
    render: (c: IncomeStatementSimple) => c.date,
  },
  {
    label: "Revenue",
    render: (c: IncomeStatementSimple) =>
      formatLargeMonetaryNumber(c.revenue),
  },
  {
    label: "Net Income",
    render: (c: IncomeStatementSimple) =>
      formatLargeMonetaryNumber(c.netIncome),
  },
];

const IncomeStatement = () => {
  const ticker = useOutletContext<string>();

  const [incomeStatement, setIncomeStatement] = useState<
    IncomeStatementSimple[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getIncomeStatement(ticker);
      setIncomeStatement(result);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      {incomeStatement ? (
        <Table config={configs} data={incomeStatement} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default IncomeStatement;

// ✅ helpers simples
function formatLargeMonetaryNumber(value: number) {
  return "$ " + value?.toLocaleString();
}