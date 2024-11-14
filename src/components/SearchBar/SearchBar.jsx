import React from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <div className={styles.searchButton}>
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
};

export default SearchBar;
