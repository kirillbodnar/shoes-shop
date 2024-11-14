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
      } else {
        state.items.push({ id, title, price, size, quantity, image });
      }
    },
    removeItem: (state, action) => {
      const { id, size } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
