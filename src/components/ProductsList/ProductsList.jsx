// src/components/MenSection.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsList.module.css";

const ProductsList = ({ name, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        console.log("Response received:", res); // Показывает весь объект ответа
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Отображает данные после парсинга JSON
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <section className={styles.productsList}>
      <h2>{name}</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
