import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
  name: "business",
  initialState: {
    businessList: [],
    businessListCopy: [],
    businessId: {},
    BusinessAcc: {},
  },
  reducers: {
    getAllBusiness: (state, action) => {
      (state.businessList = action.payload),
        (state.businessListCopy = action.payload);
    },
    getBusinessId: (state, action) => {
      state.businessId = action.payload;
    },
    filterByOrder: (state, action) => {
      const business = state.businessList;
      if (action.payload === "A-Z") {
        state.businessList = business.sort((a, b) => {
          if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase())
            return 1;
          else if (
            a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase()
          )
            return -1;
          else return 0;
        });
      }
      if (action.payload === "Z-A") {
        state.businessList = business.sort((a, b) => {
          if (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase())
            return 1;
          else if (
            a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()
          )
            return -1;
          else return 0;
        });
      }
      if (action.payload === "Rating asc") {
        state.businessList = business.sort((a, b) => {
          if (a.attributes.totalRating > b.attributes.totalRating) return 1;
          else if (a.attributes.totalRating < b.attributes.totalRating) return -1;
          else return 0;
        });
      }
      if (action.payload === "Rating desc") {
        state.businessList = business.sort((a, b) => {
          if (a.attributes.totalRating < b.attributes.totalRating) return 1;
          else if (a.attributes.totalRating > b.attributes.totalRating) return -1;
          else return 0;
        });
      } else state.businessList = business;
    },
    filterByCategory: (state, action) => {
      const business = state.businessListCopy;
      if (!action.payload) state.businessList = business;
      else state.businessList = action.payload;
    },
    getBusinessEmail: (state,action) => {
      state.BusinessAcc = action.payload
    }
  },
  
});

export const {
  getAllBusiness,
  getBusinessId,
  filterByOrder,
  filterByCategory,
  getIdBusiness,
  getiInfoBusiness,
  getBusinessEmail
} = businessSlice.actions;

export default businessSlice.reducer;
