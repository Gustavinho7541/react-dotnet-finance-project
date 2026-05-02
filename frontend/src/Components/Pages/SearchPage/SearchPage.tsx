import React, { SyntheticEvent, useState } from "react";
import { searchCompanies } from "../../../api";
import { CompanySearch } from "../../../company";
import Search from "../../Search/Search";
import ListPortfolio from "../../Portfólio/ListPortfolio/ListPortfolio";
import CardList from "../../CardList/CardList";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (valor: string) => {
    setPortfolioValues([...portfolioValues, valor]);
  };

  const onPortfolioDelete = (valor: string) => {
    setPortfolioValues(portfolioValues.filter((item) => item !== valor));
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await searchCompanies(search);

      const mapped: CompanySearch[] = result.map((item) => ({
        symbol: item.symbol,
        name: item.instrument_name,
        currency: item.currency || "USD",
        stockExchange: item.exchange,
        exchangeShortName: item.exchange,
      }));

      setSearchResult(mapped);
      setServerError("");
    } catch {
      setServerError("Erro ao buscar dados");
    }
  };

  return (
    <div className="p-6">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />

      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />

      {serverError && <div>Erro ao conectar API</div>}
    </div>
  );
};

export default SearchPage;