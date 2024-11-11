import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./NewProductsList.module.css";

const NewProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [womenResponse, menResponse] = await Promise.all([
          fetch("https://dummyjson.com/products/category/womens-shoes"),
          fetch("https://dummyjson.com/products/category/mens-shoes"),
        ]);

        const womenData = await womenResponse.json();
        const menData = await menResponse.json();

        const combinedProducts = [...womenData.products, ...menData.products];
        const shuffledProducts = combinedProducts.sort(
          () => Math.random() - 0.5
        );

        setProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.NewProductsList}>
      <h2>New</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewProductsList;
