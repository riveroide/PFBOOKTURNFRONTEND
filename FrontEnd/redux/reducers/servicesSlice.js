import { createSlice } from "@reduxjs/toolkit";

export const servicesSlice = createSlice({
    name: "services",
    initialState: {
        servicesList: [],
        servicesById: {},
        servicesByName: [],
    },
    reducers: {
        getAllServices: (state, action) => {
            state.servicesList = action.payload
        },
        getServiceById: (state, action) => {
            state.servicesById = action.payload
        },
        getServiceByName: (state, action) => {
            state.servicesByName = action.payload
        }
    }
})

export const {getAllServices,getServiceById,getServiceByName} = servicesSlice.actions

export default servicesSlice.reducer