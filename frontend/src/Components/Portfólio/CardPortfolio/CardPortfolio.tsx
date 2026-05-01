import React from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (valor: string) => void;
}

const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      
      <Link
        to={`/company/${portfolioValue}/company-profile`}
        className="pt-6 text-xl font-bold text-darkBlue hover:underline"
      >
        {portfolioValue}
      </Link>

      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
      
    </div>
  );
};

export default CardPortfolio;