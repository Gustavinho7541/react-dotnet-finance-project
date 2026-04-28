import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
  portfolioValues: string[];
  onPortfolioDelete: (valor: string) => void;
}

const ListPortfolio: React.FC<Props> = ({
  portfolioValues,
  onPortfolioDelete,
}) => {
  return (
    <div>
      {portfolioValues.map((item) => (
        <CardPortfolio
          key={item}
          portfolioValue={item}
          onPortfolioDelete={onPortfolioDelete}
        />
      ))}
    </div>
  );
};

export default ListPortfolio;