import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducer/CartSlice";

export const Store =configureStore({
    reducer:{
        CartSlice:CartSlice
    }
})