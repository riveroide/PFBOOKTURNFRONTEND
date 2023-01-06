import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        businessList: [],
        businessId: {}
    },
    reducers: {
        getAllBusiness: (state, action) => {
            state.businessList = action.payload
            //console.log(action.payload, "reducer")
        },
        getBusinessId: (state, action) => {
            state.businessId = action.payload
        }
    }
})

export const { getAllBusiness, getBusinessId } = businessSlice.actions

export default businessSlice.reducer