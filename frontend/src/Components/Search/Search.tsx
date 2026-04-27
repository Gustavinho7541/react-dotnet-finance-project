import React from "react";

interface Props {
  search: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Search = ({ search, handleChange, onClick }: Props) => {
  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Buscar empresa..."
      />

      <button onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

export default Search;