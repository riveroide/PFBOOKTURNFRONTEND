import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
    name: "clients",
    initialState: {
        clientsList: [],
        clientId: {}
    },
    reducers: {
        getAllClients: (state, action) => {
            state.clientsList = action.payload
        },
        getClientId: (state, action) => {
            state.clientId = action.payload
        }
    }
})

export const {getAllClients, getClientId} = clientsSlice.actions

export default clientsSlice.reducer