import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        bookingsList: [],
        bookingId: {}
    },
    reducers: {
        getAllBookings: (state, action) => {
            state.bookingsList = action.payload
        },
        getBookingId: (state, action) => {
            state.bookingId = action.payload
        }
    }
});

export const { getAllBookings, getBookingId } = bookingsSlice.actions;

export default bookingsSlice.reducer