import { createSlice } from "@reduxjs/toolkit";

let last = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        userAdded: (users, action) => {
            users.push({
                id: ++last,
                name: action.payload.name,
            });
        }
    }
});

export const { userAdded } = slice.actions;

export default slice.reducer;