import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, title, price, size, quantity, image } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        console.log("Updating quantity of existing item:", existingItem);
      } else {
        state.items.push({ id, title, price, size, quantity, image });
        console.log("Adding new item to cart:", {
          id,
          title,
          price,
          size,
          quantity,
          image,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log("Removing item with id:", action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      console.log("Cart cleared");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
