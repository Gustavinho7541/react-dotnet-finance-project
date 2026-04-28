import React from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfólio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (valor: string) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between w-full p-6 mb-4 bg-white shadow-md rounded-xl border hover:shadow-lg transition"
    >
      {/* Nome */}
      <div className="text-center md:text-left">
        <h2 className="font-bold text-lg text-gray-800">
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p className="text-gray-500">{searchResult.currency}</p>
      </div>

      {/* Exchange */}
      <p className="font-semibold text-gray-600 mt-2 md:mt-0">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>

      {/* Botão */}
      <div className="mt-3 md:mt-0">
        <AddPortfolio
          symbol={searchResult.symbol}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
    </div>
  );
};

export default Card;