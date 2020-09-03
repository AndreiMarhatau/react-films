import { handleActions } from "redux-actions";
import { setMovieDetailsAction } from "../actions/movie-details-page.action";

const movieDetailsPageReducer = handleActions({
  [`${setMovieDetailsAction}`]: (state, {payload}) => {
    if(payload === null || typeof payload === 'number') return payload;
    return state;
  }
}, null);

export default movieDetailsPageReducer;