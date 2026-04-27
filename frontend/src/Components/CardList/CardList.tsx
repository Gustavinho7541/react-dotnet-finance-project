import React from "react";
import { CompanySearch } from "../../company";
import Card from "../Card/Card";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
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
        <h1>No results</h1>
      )}
    </>
  );
};

export default CardList;