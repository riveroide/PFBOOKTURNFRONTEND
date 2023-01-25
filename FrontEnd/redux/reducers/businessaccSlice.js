import { createSlice } from "@reduxjs/toolkit";

export const businessaccSlice = createSlice({
  name: "businessacc",
  initialState: {
    confirmedBookings: [],
    unconfirmedBookings: [],
    IdSession: "",
    BusinessAcc:{},
  },
  reducers: {
    getConfirmedBookings: (state, action) => {
      state.confirmedBookings = action.payload;
    },
    getUnconfirmedBookings: (state, action) => {
      state.unconfirmedBookings = action.payload;
    },
    getIdBusiness: (state, action) => {
      state.IdSession = action.payload;
    },
    getiInfoBusiness: (state, action) => {
      state.BusinessAcc = action.payload;
    },
    cleanData: (state, action) => {
      state.confirmedBookings = [], 
      state.unconfirmedBookings = [],
      state.IdSession =  "",
      state.BusinessAcc = {}
    },
  },
});

export const { getUnconfirmedBookings, getConfirmedBookings,getiInfoBusiness,cleanData,getIdBusiness } =
  businessaccSlice.actions;

export default businessaccSlice.reducer;
