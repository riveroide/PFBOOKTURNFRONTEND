import { createSlice } from "@reduxjs/toolkit";

export const ratingsSlice = createSlice({
    name: "ratings",
    initialState: {
        ratingList: [],
        ratingId: {}
    },
    reducers: {
        getAllRatings: (state, action) => {
            state.ratingList = action.payload
        },
        getRatingId: (state, action) => {
            state.ratingId = action.payload
        }
    }
});

export const { getAllRatings, getRatingId } = ratingsSlice.actions;

export default ratingsSlice.reducer