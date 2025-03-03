import React from "react";

function SearchBar({ handleSortChange, handleFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" onChange={handleSortChange} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="sort" onChange={handleSortChange} />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
