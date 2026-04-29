import React from "react";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (valor: string) => void;
}

const DeletePortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}) => {
  return (
    <button
      onClick={() => onPortfolioDelete(portfolioValue)}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
    >
      Delete
    </button>
  );
};

export default DeletePortfolio;