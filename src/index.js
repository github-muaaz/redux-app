import { bugAdded, bugResolved } from "./store/bugs";
import configureStore from "./store";

const store = configureStore();

store.dispatch(bugAdded({ description: 'Bug 1' }));
store.dispatch(bugAdded({ description: 'Bug 2' }));
store.dispatch(bugAdded({ description: 'Bug 3' }));

store.dispatch(bugResolved({ id: 1 }));

console.table(store.getState());