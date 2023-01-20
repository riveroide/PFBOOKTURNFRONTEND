import { createSlice } from "@reduxjs/toolkit";

export const ratingsSlice = createSlice({
    name: "ratings",
    initialState: {
        ratingBusinessList: [],
        ratingId: {},
        ratingByClientAndBusiness: {}
    },
    reducers: {
        getAllRatings: (state, action) => {
            state.ratingBusinessList = action.payload
        },
        getRatingId: (state, action) => {
            state.ratingId = action.payload
        },
        getRatingByClientAndBusiness: (state, action) => {
            state.ratingByClientAndBusiness = action.payload
        }
    }
});

export const { getAllRatings, getRatingId, getRatingByClientAndBusiness } = ratingsSlice.actions;

export default ratingsSlice.reducer