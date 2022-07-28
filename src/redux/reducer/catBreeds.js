import { SET_CAT_BREEDS } from '../actionTypes'
  
function catBreedsReducer(state = null, action) {
    switch (action.type) {
        case SET_CAT_BREEDS: {
            console.log('here')
            return { ...state, cat_breeds: action.payload }
        }
        default:
            console.log('yup')
            console.log(state)
            return state
    }
}

export default catBreedsReducer