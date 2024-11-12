import React from "react";
import styles from "./Footer.module.css";
import twitterIcon from "../../assets/x.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Orix</h2>
          <p>Your go-to place for comfortable shoes.</p>
        </div>
        <div className={styles.linksSection}>
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="/new">New Arrivals</a>
            </li>
            <li>
              <a href="/men">Men</a>
            </li>
            <li>
              <a href="/women">Women</a>
            </li>
          </ul>
        </div>
        <div className={styles.linksSection}>
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/about">Our Purpose</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialSection}>
          <ul>
            <li>
              <a href="https://facebook.com">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src={twitterIcon} alt="X" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Orix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
