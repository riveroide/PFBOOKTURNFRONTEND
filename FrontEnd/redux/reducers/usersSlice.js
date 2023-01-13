import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        usersList: []
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.usersList = action.payload
        }
    }
});

export const { getAllUsers } = usersSlice.actions;

export default usersSlice.reducer