import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        usersList: [],
        userInfo:{}
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.usersList = action.payload
        },
        getUserEmail: (state, action) =>{
            state.userInfo = action.payload
        }
    }
});

export const { getAllUsers , getUserEmail } = usersSlice.actions;

export default usersSlice.reducer