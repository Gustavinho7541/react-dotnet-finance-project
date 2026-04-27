import './App.css';
import Search from './Components/Search/Search';
import CardList from './Components/CardList/CardList';
import { useState } from 'react';
import { searchCompanies } from './Components/api';
import { CompanySearch } from './company';

function App() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else {
      setSearchResult(result);
    }
  };

  return (
    <div className="App">
      <Search 
        onClick={onClick} 
        search={search} 
        handleChange={handleChange}
      />

      {serverError && <h1>{serverError}</h1>}

      <CardList companies={searchResult} />
    </div>
  );
}

export default App;