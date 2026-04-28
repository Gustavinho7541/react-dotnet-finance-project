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

  // ✅ ADD
  const onPortfolioCreate = (valor: string) => {
    setPortfolioValues([...portfolioValues, valor]);
  };

  // ✅ DELETE (CORRETO)
  const onPortfolioDelete = (valor: string) => {
    const updated = portfolioValues.filter((item) => item !== valor);
    setPortfolioValues(updated);
  };

  // ✅ SEARCH (ARRUMADO)
const onSearchSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();

  console.log("Buscando:", search); // 👈 AQUI

  const result = await searchCompanies(search);

  console.log("Resultado:", result); // 👈 AQUI

  if (typeof result === "string") {
    setServerError(result);
  } else {
    setSearchResult(result);
    setServerError("");
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