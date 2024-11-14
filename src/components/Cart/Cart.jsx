import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../store/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>My Cart:</h2>
      {items.length === 0 ? (
        <p className={styles.emptyCard}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.id + item.size} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartImage}
                />
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemInfo}>Size: {item.size}</p>
                  <p className={styles.itemInfo}>Price: ${item.price}</p>
                  <p className={styles.itemInfo}>Quantity: {item.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch(removeItem({ id: item.id, size: item.size }))
                    }
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>
            <p>Sub Total: ${subtotal.toFixed(2)}</p>
            <p>Shipping: Free</p>
            <p>Sales Tax: Calculated at checkout</p>
            <h3>Total: ${subtotal.toFixed(2)}</h3>
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
