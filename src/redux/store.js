import { createStore, applyMiddleware } from 'redux'
import logger from "redux-logger"
import rootReducer from './reducer'

//export default createStore(rootReducer)

export default createStore(rootReducer, applyMiddleware(logger));


/*import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './slice'
export default configureStore({
  breeds: breedsReducer,
})*/