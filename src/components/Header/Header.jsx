import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a className={styles.logo} href="/">
          Orix
        </a>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/new">New</a>
            </li>
            <li className={styles.navItem}>
              <a href="/men">Men</a>
            </li>
            <li className={styles.navItem}>
              <a href="/women">Women</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.actions}>
        <a href="login" className={styles.actionItem}>
          <i className="bi bi-person"></i> Log in | Join
        </a>
        <a href="cart" className={styles.actionItem}>
          <i className="bi bi-cart"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
