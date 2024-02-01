import { combineReducers } from "redux";
import bugReducer from './bugs';
import productReducer from "./products";
import userReducer from "./users";

export default combineReducers({
    bugs: bugReducer,
    products: productReducer,
    uesrs: userReducer
})