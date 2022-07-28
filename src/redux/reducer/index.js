import { combineReducers } from 'redux'
import catListReducer from './catList'
import catBreedsReducer from './catBreeds'
export default combineReducers({ catListReducer, catBreedsReducer })