import { SET_MOVIES, SET_TITLES } from "../actionTypes";

function categoriesReducer(state = null, action) {
  switch (action.type) {
    case SET_MOVIES: {
      console.log("here");
      return { ...state, categories: action.payload };
    }
    case SET_TITLES: {
      return { ...state, titles: action.payload };
    }
    default:
      console.log("yup");
      console.log(state);
      return state;
  }
}

export default categoriesReducer;
