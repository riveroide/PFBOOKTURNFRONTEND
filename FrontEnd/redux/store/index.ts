import { configureStore } from "@reduxjs/toolkit";
import business from "../reducers/businessSlice"
import clients from "../reducers/clientsSlice"

export const store = configureStore({
  reducer: {
    business,
    clients
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
