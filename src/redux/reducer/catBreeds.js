import { SET_CAT_BREEDS } from '../actionTypes'

const INITIAL_STATE = {
  cat_breeds: undefined
}

const catBreedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAT_BREEDS: {
      const newState = { cat_breeds: action.payload }
      return newState
    }
    default:
      return state
  }
}

export default catBreedsReducer