import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getCashflow } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormating";

type CashFlow = {
  date: string;
  operatingCashFlow: number;
  netCashUsedForInvestingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
  cashAtEndOfPeriod: number;
  capitalExpenditure: number;
  commonStockIssued: number;
  freeCashFlow: number;
};

const config = [
  {
    label: "Date",
    render: (c: CashFlow) => c.date,
  },
  {
    label: "Operating Cashflow",
    render: (c: CashFlow) =>
      formatLargeMonetaryNumber(c.operatingCashFlow),
  },
  {
    label: "Free Cash Flow",
    render: (c: CashFlow) =>
      formatLargeMonetaryNumber(c.freeCashFlow),
  },
];

const CashFlowStatement = () => {
  const ticker = useOutletContext<string>();
  const [data, setData] = useState<CashFlow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getCashflow(ticker);
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

export default CashFlowStatement;