import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let last = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++last,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugAssignedToUser: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.bugId);
            bugs[index].userId = action.payload.userId;
        }
    }
});

export const {bugAdded, bugResolved, bugAssignedToUser} = slice.actions;

export default slice.reducer;

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)

export const getBugByUserId = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)
