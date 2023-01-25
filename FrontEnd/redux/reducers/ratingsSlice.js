import { createSlice } from "@reduxjs/toolkit";

export const ratingsSlice = createSlice({
    name: "ratings",
    initialState: {
        ratingBusinessList: [],
        ratingId: {},
        ratingByClientAndBusiness: {},
        allRatings: []
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
        },
        getRatings: (state, action) => {
            state.allRatings = action.payload
        }
    }
});

export const { getAllRatings, getRatingId, getRatingByClientAndBusiness, getRatings } = ratingsSlice.actions;

export default ratingsSlice.reducer