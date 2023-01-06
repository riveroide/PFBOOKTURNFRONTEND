import { configureStore } from "@reduxjs/toolkit";
import business from "../reducers/businessSlice"
import clients from "../reducers/clientsSlice"
import bookings from "../reducers/bookingsSlice";
import categories from "../reducers/categoriesSlice"

export const store = configureStore({
  reducer: {
    business,
    clients,
    bookings,
    categories
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
