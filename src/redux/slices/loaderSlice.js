import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading  : false
}

const loaderSlice = createSlice({
    name : "loader",
    initialState,
    reducers : {
        isOpen : (state) => {
            state.isLoading = true
        },
        isClose : (state) => {
            state.isLoading = false
        }
    }
})

export const {isOpen, isClose} = loaderSlice.actions

export default loaderSlice.reducer