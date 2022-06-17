import { combineReducers } from "redux";            // index.js is for all reducers
import authReducer from "./authReducer";
import postReducer from "./postReducer";

export const reducers = combineReducers({authReducer, postReducer})
