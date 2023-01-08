import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
    name: "clients",
    initialState: {
        clientsList: [],
        clientId: null,
        displayOption: ''
    },
    reducers: {
        getAllClients: (state, action) => {
            state.clientsList = action.payload
        },
        getClientId: (state, action) => {
            state.clientId = action.payload
        },
        setDisplayOption: (state, action) => {
            state.displayOption = action.payload
        }
    }
})

export const {getAllClients, getClientId, setDisplayOption} = clientsSlice.actions

export default clientsSlice.reducer