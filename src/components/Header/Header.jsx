// src/components/Header/Header.jsx
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>Orix</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#new">New</a>
            </li>
            <li className={styles.navItem}>
              <a href="#men">Men</a>
            </li>
            <li className={styles.navItem}>
              <a href="#women">Women</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <i className="bi bi-search"></i> {/* Bootstrap search icon */}
          </button>
        </div>
        <a href="#login" className={styles.actionItem}>
          <i className="bi bi-person"></i> Log in | Join
        </a>
        <a href="#cart" className={styles.actionItem}>
          <i className="bi bi-cart"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
