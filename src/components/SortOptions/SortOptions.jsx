// src/components/SortOptions.jsx
import React from "react";

const SortOptions = ({ onSortChange }) => {
  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
        <option value="reccomended">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
