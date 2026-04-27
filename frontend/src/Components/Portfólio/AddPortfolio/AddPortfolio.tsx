import React, { SyntheticEvent } from "react";

interface Props {
  symbol: string;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const AddPortfolio: React.FC<Props> = ({
  symbol,
  onPortfolioCreate,
}) => {
  return (
    <button onClick={onPortfolioCreate}>
      Add {symbol}
    </button>
  );
};

export default AddPortfolio;