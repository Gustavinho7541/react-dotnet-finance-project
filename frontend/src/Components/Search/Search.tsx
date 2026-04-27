import React, { SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}) => {
  return (
    <form onSubmit={onSearchSubmit}>
      
      <input
        value={search}
        onChange={handleSearchChange}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;