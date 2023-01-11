import { configureStore } from "@reduxjs/toolkit";
import business from "../reducers/businessSlice"
import clients from "../reducers/clientsSlice"
import bookings from "../reducers/bookingsSlice";
import categories from "../reducers/categoriesSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import {
  PERSIST,
  REHYDRATE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  business,
  clients,
  bookings,
  categories
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production"
});

export default store;