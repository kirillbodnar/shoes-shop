import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { selectTotalItems } from "../../store/cartSlice";
import ModalMenu from "../ModalMenu/ModalMenu";

const Header = () => {
  const totalItems = useSelector(selectTotalItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <a className={styles.logo} href="/shoes-shop">
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
          <a href="/cart" className={styles.cart}>
            <i className="bi bi-cart"></i>
            {totalItems > 0 && (
              <span className={styles.cartCount}>{totalItems}</span>
            )}
          </a>
          <div className={styles.modalButton} onClick={handleModalToggle}>
            <i className="bi bi-list"></i>
          </div>
        </div>
      </header>
      <ModalMenu isOpen={isModalOpen} onClose={handleModalToggle} />
    </>
  );
};

export default Header;
