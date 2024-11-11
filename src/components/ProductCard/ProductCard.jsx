// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";
import placeholderImage from "../../assets/placeholder.webp";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img
          src={product.thumbnail || placeholderImage}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
