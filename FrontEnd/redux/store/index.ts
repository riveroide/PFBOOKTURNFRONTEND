import { configureStore } from "@reduxjs/toolkit";
import business from "../reducers/businessSlice"

export const store = configureStore({
  reducer: {
    business
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
