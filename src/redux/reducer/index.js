import { combineReducers } from "redux";
import moviesReducer from "./movies";
import categoriesReducer from "./categories";
export default combineReducers({ moviesReducer, categoriesReducer });
