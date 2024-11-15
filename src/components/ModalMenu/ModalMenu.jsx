import React from "react";
import styles from "./ModalMenu.module.css";

const ModalMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ""}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <a href="/" className={styles.logo}>
            Orix
          </a>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <ul className={styles.menuList}>
          <li>
            <a href="/new" className={styles.menuItem}>
              New
            </a>
          </li>
          <li>
            <a href="/men" className={styles.menuItem}>
              Men
            </a>
          </li>
          <li>
            <a href="/women" className={styles.menuItem}>
              Women
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
