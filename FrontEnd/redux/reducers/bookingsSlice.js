import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        bookingsList: [],
        bookingId: {},
        bookingByBusinessAndClient: []
    },
    reducers: {
        getAllBookings: (state, action) => {
            state.bookingsList = action.payload
        },
        getBookingId: (state, action) => {
            state.bookingId = action.payload
        },
        getBookingByBusinessAndClient: (state, action) => {
            state.bookingByBusinessAndClient = action.payload
        }
    }
});

export const { getAllBookings, getBookingId, getBookingByBusinessAndClient } = bookingsSlice.actions;

export default bookingsSlice.reducer