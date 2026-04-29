import React, { SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}) => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="flex flex-col w-full p-6 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />

          <button
            type="submit"
            className="px-6 py-3 text-white bg-lightBlue rounded-lg hover:opacity-80"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;