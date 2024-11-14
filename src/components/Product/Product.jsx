import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../../store/cartSlice";
import styles from "./Product.module.css";
import placeholder from "../../assets/placeholder.webp";
import Loading from "../Loading/Loading"; // Импорт компонента Loading

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some(
    (item) => item.id === product?.id && item.size === selectedSize
  );

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true); // Включаем загрузку перед началом запроса
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false); // Отключаем загрузку после завершения запроса
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) return <Loading />; // Показываем Loading, пока идет загрузка

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
    } else {
      dispatch(
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          size: selectedSize,
          quantity: 1,
          image: mainImage,
        })
      );
    }
  };

  product.sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];

  return (
    <div className={styles.productPage}>
      <div className={styles.imageSection}>
        <div className={styles.mainImageWrapper}>
          <img
            src={mainImage || placeholder}
            alt={product.title}
            className={styles.mainImage}
            loading="lazy"
          />
        </div>
        <div className={styles.thumbnailGallery}>
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={index}
                src={image || placeholder}
                alt={`${product.title} - ${index}`}
                loading="lazy"
                className={`${styles.thumbnail} ${
                  selectedImageIndex === index ? styles.selectedThumbnail : ""
                }`}
                onClick={() => {
                  setMainImage(image);
                  setSelectedImageIndex(index);
                }}
              />
            ))}
        </div>
      </div>

      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.sizeOptions}>
          <p>Select Size:</p>
          <div className={styles.sizeGrid}>
            {product.sizes ? (
              product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`${styles.sizeButton} ${
                    selectedSize === size ? styles.selected : ""
                  }`}
                >
                  {size}
                </button>
              ))
            ) : (
              <p>No sizes available</p>
            )}
          </div>
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
        {isInCart && (
          <button
            onClick={() =>
              dispatch(removeItem({ id: product.id, size: selectedSize }))
            }
            className={styles.removeButton}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
