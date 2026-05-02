import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RadioList/RadioList";
import Spinner from "../Spinner/Spinner";
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormating";

const tableConfig = [
  {
    label: "Market Cap",
    render: (c: any) =>
      formatLargeNonMonetaryNumber(c.marketCap || 0),
    subTitle: "Total company value",
  },
  {
    label: "Price",
    render: (c: any) => formatRatio(Number(c.price)),
    subTitle: "Stock price",
  },
];

const CompanyProfile = () => {
  const ticker = useOutletContext<string>();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!ticker) return;

      const result = await getKeyMetrics(ticker);
      setData(result);
    };

    fetchData();
  }, [ticker]);

  return (
    <div className="p-2">
      <h2 className="text-lg font-semibold mb-2">
        Company Profile ({ticker})
      </h2>

      {data ? (
        <RatioList config={tableConfig} data={data} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompanyProfile;