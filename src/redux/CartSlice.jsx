
import { createSlice } from "@reduxjs/toolkit";

// Initial state of the shopping cart
const initialState = {
  items: [],
};

// Create the Redux slice for cart operations
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add a plant to the cart
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === plant.id
      );

      // Prevent duplicate additions from the product listing
      if (!existingItem) {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // Increase the quantity of a plant
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease the quantity of a plant
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Remove a plant completely from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Empty the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions for use in React components
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

// Export the reducer for the Redux store
export default cartSlice.reducer;
