import { createAction, createReducer } from "@reduxjs/toolkit";
import { findIndex } from "lodash";

// actions
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

// reducer
let last = 0;

createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++last,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugResolved.type]: (bugs, action) => {
        const index = findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    }
})

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
            id: ++last,
            description: action.payload.description,
            resolved: false
        }
      ];
    case bugRemoved.type:
      return state.filter(bug => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map(bug =>
        (bug.id === action.payload.id) ? {...bug, resolved: true} : bug);
    default:
      return state;
  }
}
