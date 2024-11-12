import React from "react";
import styles from "./SortOptions.module.css";

const SortOptions = ({ onSortChange }) => {
  return (
    <div className={styles.sortContainer}>
      <label htmlFor="sort" className={styles.label}>
        <i className={`bi bi-caret-down-fill ${styles.icon}`}></i>
        Sort by:
      </label>
      <select
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.sortSelect}
      >
        <option value="recommended">Recommended</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
