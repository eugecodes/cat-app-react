import { createStore } from 'redux'
import rootReducer from './reducer'

export default createStore(rootReducer)

/*import { configureStore } from '@reduxjs/toolkit'
import breedsReducer from './slice'
export default configureStore({
  breeds: breedsReducer,
})*/