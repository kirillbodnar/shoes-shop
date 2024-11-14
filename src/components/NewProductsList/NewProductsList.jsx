import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./NewProductsList.module.css";
import SortOptions from "../SortOptions/SortOptions";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading"; // Импорт компонента Loading

const NewProductsList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [isLoading, setIsLoading] = useState(true); // Состояние для отслеживания загрузки
  const searchQuery = useSelector((state) => state.search);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Устанавливаем загрузку в true перед началом
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
        setIsLoading(false); // Отключаем загрузку после завершения
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Отключаем загрузку в случае ошибки
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedArray = [...products];

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

    const filteredProducts = sortedArray.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSortedProducts(filteredProducts);
  }, [sortOption, products, searchQuery]);

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <section className={styles.newProductsList}>
      <h2>New</h2>
      <div className={styles.searchOptionsContainer}>
        <SortOptions onSortChange={handleSortChange} />
        <SearchBar />
      </div>

      {isLoading ? (
        <Loading /> // Отображаем компонент Loading, если данные загружаются
      ) : sortedProducts.length > 0 ? (
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

export default NewProductsList;
