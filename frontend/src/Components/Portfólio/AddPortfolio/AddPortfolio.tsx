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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPortfolioCreate(valor);
    setValor(""); // limpa o input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="p-2 border rounded"
        placeholder="Digite um valor"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-lightBlue text-white rounded"
      >
        Add {symbol}
      </button>
    </form>
  );
};

export default AddPortfolio;