import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyBalanceSheet } from "../../company";
import { getBalanceSheet } from "../api";
import RatioList from "../RadioList/RadioList";

// 👇 versão simplificada (igual você fez no Income)
type BalanceSheetSimple = {
  totalAssets?: number;
  totalCurrentAssets?: number;
  cashAndCashEquivalents?: number;
  propertyPlantEquipmentNet?: number;
  intangibleAssets?: number;
  longTermDebt?: number;
  totalLiabilities?: number;
  totalCurrentLiabilities?: number;
  totalEquity?: number;
};

// CONFIG
const config = [
  {
    label: "Total Assets",
    render: (c: BalanceSheetSimple) => formatMoney(c.totalAssets),
  },
  {
    label: "Current Assets",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.totalCurrentAssets),
  },
  {
    label: "Total Cash",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.cashAndCashEquivalents),
  },
  {
    label: "Property & Equipment",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.propertyPlantEquipmentNet),
  },
  {
    label: "Intangible Assets",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.intangibleAssets),
  },
  {
    label: "Long Term Debt",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.longTermDebt),
  },
  {
    label: "Total Liabilities",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.totalLiabilities),
  },
  {
    label: "Current Liabilities",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.totalCurrentLiabilities),
  },
  {
    label: "Equity",
    render: (c: BalanceSheetSimple) =>
      formatMoney(c.totalEquity),
  },
];

const BalanceSheet = () => {
  const ticker = useOutletContext<string>();

  const [balanceSheet, setBalanceSheet] =
    useState<BalanceSheetSimple | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getBalanceSheet(ticker);

      // 👇 pegando o primeiro item (igual Income)
      setBalanceSheet(result?.[0]);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      {balanceSheet ? (
        <RatioList config={config} data={balanceSheet} />
      ) : (
        <div className="p-4">Loading...</div>
      )}
    </>
  );
};

export default BalanceSheet;

// FORMATADOR
function formatMoney(value?: number) {
  if (value === undefined) return "-";
  return "$ " + value.toLocaleString();
}
