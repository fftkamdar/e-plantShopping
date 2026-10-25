
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

// Create the central Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
