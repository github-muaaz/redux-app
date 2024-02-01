import { productAdded } from "./store/products";
import { bugAdded, bugAssignedToUser, bugResolved, getBugByUserId, getUnresolvedBugs } from "./store/bugs";
import configureStore from "./store";
import { userAdded } from "./store/users";

const store = configureStore();

store.dispatch(userAdded({name: 'User 1'}))

store.dispatch(productAdded({ title: 'Product 1' }));
store.dispatch(productAdded({ title: 'Product 2' }));
store.dispatch(productAdded({ title: 'Product 3' }));

store.dispatch(bugAdded({description: 'Bug1'}))
store.dispatch(bugAdded({description: 'Bug2'}))
store.dispatch(bugAdded({description: 'Bug3'}))
store.dispatch(bugResolved({id: 1}));
store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}));

console.log(getBugByUserId(1)(store.getState()));

console.log(store.getState());