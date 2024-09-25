import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
};

// Cart slice
const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        // Add to cart
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
            } else {
                const newItem = { ...action.payload, qnty: 1 };
                state.carts.push(newItem); // Using push for better readability
            }
        },

        // Remove particular items
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
        },

        // Remove a single item
        removeSingleItem: (state, action) => {
            const itemIndex = state.carts.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0 && state.carts[itemIndex].qnty > 0) {
                state.carts[itemIndex].qnty -= 1;
            }
        },

        // Clear cart
        emptyCart: (state) => {
            state.carts = [];
        }
    }
});

// Exporting actions and reducer
export const { addToCart, removeFromCart, removeSingleItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
