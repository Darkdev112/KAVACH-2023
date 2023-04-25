import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './slices/loaderSlice'
import modalReducer from './slices/modalSlice'

const store = configureStore({
    reducer: {
        loader : loaderReducer,
        modal : modalReducer,
    }
})

export default store