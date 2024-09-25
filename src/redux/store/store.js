import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartslice";

// create store
export const store = configureStore({
    reducer: {
        allCart: cartSlice
    }
})