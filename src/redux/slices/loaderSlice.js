import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading  : false,
    hasLoaded : false
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
        },
        hasOpen : (state) => {
            state.hasLoaded = true
        },
        hasClose : (state) => {
            state.hasLoaded = false
        }
    }
})

export const {isOpen, isClose, hasOpen, hasClose} = loaderSlice.actions

export default loaderSlice.reducer