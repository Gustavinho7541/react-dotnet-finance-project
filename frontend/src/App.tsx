import "./App.css";
import Search from "./Components/Search/Search";
import CardList from "./Components/CardList/CardList";
import { useState, SyntheticEvent } from "react";
import { searchCompanies } from "./Components/api";

import ListPortfolio from "./Components/Portfólio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState([]);
  const [serverError, setServerError] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    const updatedPortfolio = [
      ...portfolioValues,
      e.target[0].value,
    ];

    setPortfolioValues(updatedPortfolio);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else {
      setSearchResult(result);
      setServerError("");
    }
  };

  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />

      <ListPortfolio portfolioValues={portfolioValues} />

      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />

      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
}

export default App;