import React, { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <>
      <form className="input">
        <input
          type="input"
          placeholder="Enter dorm name"
          className="input__box"
          onChange={handleInputChange}
        ></input>
        <button type="submit" className="input__submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBar;
