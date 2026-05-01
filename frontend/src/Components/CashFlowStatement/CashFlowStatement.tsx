import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { getCashflow } from "../api";

// 👇 tipo simplificado (igual você fez nos outros)
type CompanyCashFlow = {
  date: string;
  operatingCashFlow?: number;
  netCashUsedForInvestingActivites?: number;
  netCashUsedProvidedByFinancingActivities?: number;
  cashAtEndOfPeriod?: number;
  capitalExpenditure?: number;
  commonStockIssued?: number;
  freeCashFlow?: number;
};

const config = [
  {
    label: "Date",
    render: (c: CompanyCashFlow) => c.date,
  },
  {
    label: "Operating Cashflow",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.netCashUsedProvidedByFinancingActivities),
  },
  {
    label: "Cash End Period",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.cashAtEndOfPeriod),
  },
  {
    label: "CapEx",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.capitalExpenditure),
  },
  {
    label: "Stock Issued",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (c: CompanyCashFlow) =>
      formatMoney(c.freeCashFlow),
  },
];

const CashFlowStatement = () => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflow] = useState<CompanyCashFlow[] | null>(null);

  useEffect(() => {
    const fetchCashflow = async () => {
      if (!ticker) return;

      const result = await getCashflow(ticker);
      setCashflow(result);
    };

    fetchCashflow();
  }, [ticker]);

  return (
    <>
      {cashflowData && cashflowData.length > 0 ? (
        <Table config={config} data={cashflowData} />
      ) : (
        <div className="p-4">No results</div>
      )}
    </>
  );
};

export default CashFlowStatement;

// FORMATADOR
function formatMoney(value?: number) {
  if (value === undefined) return "-";
  return "$ " + value.toLocaleString();
}