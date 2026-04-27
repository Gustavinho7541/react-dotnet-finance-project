import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfólio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  searchResult,
  onPortfolioCreate,
}) => {
  return (
    <div className="card">
      <img alt="company logo" />

      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>

        <p>{searchResult.currency}</p>
      </div>

      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>

      <AddPortfolio
        symbol={searchResult.symbol}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};

export default Card;