
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "../Table/Table";
import { CompanyIncomeStatement } from "../../company";
import { getIncomeStatement } from "../../api";
import Spinner from "../Spinner/Spinner";
import {
  formatLargeMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormating";

const configs = [
  {
    label: "Date",
    render: (c: CompanyIncomeStatement) => c.date,
  },
  {
    label: "Revenue",
    render: (c: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(c.revenue),
  },
  {
    label: "Net Income",
    render: (c: CompanyIncomeStatement) =>
      formatLargeMonetaryNumber(c.netIncome),
  },
];

const IncomeStatement = () => {
  const ticker = useOutletContext<string>();
  const [data, setData] = useState<CompanyIncomeStatement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getIncomeStatement(ticker);
      setData(result as CompanyIncomeStatement[]);
    };

    fetchData();
  }, [ticker]);

  return (
    <>
      {data.length > 0 ? (
        <Table config={configs} data={data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default IncomeStatement;