// src/components/Product/Product.jsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/cartSlice";
import styles from "./Product.module.css";
import placeholder from "../../assets/placeholder.webp";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail);
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
    } else {
      console.log("Dispatching addItem with:", product);
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
      alert(`Added ${product.title} (Size: ${selectedSize}) to cart.`);
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
      </div>
    </div>
  );
};

export default Product;
