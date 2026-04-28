import React from "react";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (valor: string) => void;
}

const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}) => {
  return (
    <div>
      <span>{portfolioValue}</span>

      <button onClick={() => onPortfolioDelete(portfolioValue)}>
        Delete
      </button>
    </div>
  );
};

export default CardPortfolio;