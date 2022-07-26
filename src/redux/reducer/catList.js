import { SET_CAT_LIST } from '../actionTypes'

const INITIAL_STATE = {
  cat_list: undefined
}

const catListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAT_LIST: {
      const newState = { cat_list: action.payload }
      return newState
    }
    default:
      return state
  }
}

export default catListReducer