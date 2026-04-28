import React, { useState } from "react";

interface Props {
  symbol: string;
  onPortfolioCreate: (valor: string) => void;
}

const AddPortfolio: React.FC<Props> = ({
  symbol,
  onPortfolioCreate,
}) => {
  const [valor, setValor] = useState("");

  const handleClick = () => {
    onPortfolioCreate(valor);
  };

  return (
    <div>
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button onClick={handleClick}>
        Add {symbol}
      </button>
    </div>
  );
};

export default AddPortfolio;