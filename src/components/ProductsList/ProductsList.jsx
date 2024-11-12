import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsList.module.css";
import SortOptions from "../SortOptions/SortOptions";
import SearchBar from "../SearchBar/SearchBar";

const ProductsList = ({ name, category }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  // Получаем searchQuery из Redux
  const searchQuery = useSelector((state) => state.search);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSortedProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  useEffect(() => {
    let sortedArray = [...products];

    // Сортируем продукты на основе локального sortOption
    switch (sortOption) {
      case "priceAsc":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "recommended":
        sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        sortedArray = products;
    }

    // Фильтруем продукты на основе searchQuery из Redux
    const filteredProducts = sortedArray.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSortedProducts(filteredProducts);
  }, [sortOption, products, searchQuery]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <section className={styles.productsList}>
      <h2>{name}</h2>
      <div className={styles.searchOptionsContainer}>
        <SortOptions onSortChange={handleSortChange} />
        <SearchBar />
      </div>

      {sortedProducts.length > 0 ? (
        <div className={styles.productGrid}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>Results not found</p>
      )}
    </section>
  );
};

export default ProductsList;
