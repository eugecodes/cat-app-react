import { SET_CAT_LIST } from '../actionTypes'

function catListReducer(state = null, action) {
    switch (action.type) {
      case SET_CAT_LIST: {
        return { ...state, cat_list: action.payload }
      }
      default:
        return state
    }
}
export default catListReducer