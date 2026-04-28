import React from "react";
import { CompanySearch } from "../../company";
import Card from "../Card/Card";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (valor: string) => void; // ✅ corrigido
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card
              id={result.symbol}
              key={result.symbol}
              searchResult={result}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </>
  );
};

export default CardList;