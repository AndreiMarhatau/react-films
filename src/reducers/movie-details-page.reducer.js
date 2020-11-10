import { handleActions } from 'redux-actions';
import { setMovieDetailsAction } from '../actions/movie-details-page.action';

const movieDetailsPageReducer = handleActions({
  [`${setMovieDetailsAction}`]: (state, { payload }) => payload,
}, null);

export default movieDetailsPageReducer;
