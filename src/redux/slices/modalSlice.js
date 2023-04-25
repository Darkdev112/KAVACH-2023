import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false,
    toggleLogin : true,
}

const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers : {
        openModal : (state) => {
            state.show = true;
        },
        closeModal : (state) => {
            state.show = false;
        },
        openLogin : (state) => {
            state.toggleLogin = true
        },
        closeLogin : (state) => {
            state.toggleLogin = false
        }        
    }
})

export const {openModal, closeModal, openLogin, closeLogin} = modalSlice.actions

export default modalSlice.reducer