import { createSlice } from "@reduxjs/toolkit";

export const businessaccSlice = createSlice({
    name: "businessacc",
    initialState: {
        confirmedBookings: [],
        unconfirmedBookings:[]
    },
    reducers: {
        getConfirmedBookings: (state, action) => {
            state.confirmedBookings = action.payload
        },
        getUnconfirmedBookings: (state, action) =>{
            state.unconfirmedBookings = action.payload
        },
        cleanData: (state,action) => {
            state.confirmedBookings= [],
            state.unconfirmedBookings= []
        }
    }
});

export const { getUnconfirmedBookings , getConfirmedBookings } = businessaccSlice.actions;

export default businessaccSlice.reducer