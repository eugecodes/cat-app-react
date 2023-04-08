import { SET_MOVIE_LIST } from "../actionTypes";

function moviesReducer(state = null, action) {
  switch (action.type) {
    case SET_MOVIE_LIST: {
      return { ...state, movies: action.payload };
    }
    default:
      return state;
  }
}
export default moviesReducer;
