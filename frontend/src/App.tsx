import "./App.css";
import Search from "./Components/Search/Search";
import CardList from "./Components/CardList/CardList";
import { useState, SyntheticEvent } from "react";
import { searchCompanies } from "./Components/api";
import Navbar from "./Components/Navbar/Navbar";
import ListPortfolio from "./Components/Portfólio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState([]);
  const [serverError, setServerError] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // ADD
  const onPortfolioCreate = (valor: string) => {
    setPortfolioValues([...portfolioValues, valor]);
  };

  // DELETE
  const onPortfolioDelete = (valor: string) => {
    const updated = portfolioValues.filter((item) => item !== valor);
    setPortfolioValues(updated);
  };

  // SEARCH
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const result = await searchCompanies(search);

      if (typeof result === "string") {
        setServerError(result);
        setSearchResult([]);
      } else {
        setSearchResult(result);
        setServerError("");
      }
    } catch (error) {
      console.error("Erro na busca:", error);
      setServerError("Erro ao buscar dados");
    }
  };

  return (
    <div className="App">
      <Navbar />

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

      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
}

export default App;