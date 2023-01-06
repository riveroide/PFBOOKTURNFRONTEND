import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categoriesList: []
    },
    reducers: {
        getAllCategories: (state, action) => {
            state.categoriesList = action.payload
        },
    }
})

export const {getAllCategories} = categoriesSlice.actions

export default categoriesSlice.reducer