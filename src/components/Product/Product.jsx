import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.css";
import placeholder from "../../assets/placeholder.webp";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track selected thumbnail

  useEffect(() => {
    // Fetch product data by ID
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail); // Set the main image initially
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle "Add to Cart" (mock function for now)
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
    } else {
      alert(`Added ${product.title} (Size: ${selectedSize}) to cart.`);
    }
  };

  product.sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];

  return (
    <div className={styles.productPage}>
      {/* Left Section: Image Gallery */}
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
                  setSelectedImageIndex(index); // Update selected thumbnail
                }}
              />
            ))}
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className={styles.detailsSection}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>Price: ${product.price}</p>
        <p className={styles.description}>{product.description}</p>

        {/* Size Selection */}
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

        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
