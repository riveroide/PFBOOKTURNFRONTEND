import { configureStore } from "@reduxjs/toolkit";
import business from "../reducers/businessSlice"
import clients from "../reducers/clientsSlice"
import services from "../reducers/servicesSlice"

export const store = configureStore({
  reducer: {
    business,
    clients,
    services,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
