import { createSlice } from "@reduxjs/toolkit";

let last = 0;

const slice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        productAdded: (products, action) => {
            products.push({
                id: ++last,
                title: action.payload.title,
            });
        }
    }
});

export const { productAdded } = slice.actions;

export default slice.reducer;