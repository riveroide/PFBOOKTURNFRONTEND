import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        business: []
    },
    reducers: {
        getAllBusiness: (state, action) => {
            state.business = action.payload
        }
    }
})

export const { getAllBusiness } = businessSlice.actions

export default businessSlice.reducer