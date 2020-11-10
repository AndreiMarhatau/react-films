import consts from '../constants/consts';

const { createAction } = require('redux-actions');

export const setMovieDetailsAction = createAction('SET_MOVIE_DETAILS');

export const setMovieDetails = (movieId) => (dispatch) => fetch(`${consts.apiUrl}/movies/${movieId}`)
  .then((r) => r.json())
  .then((r) => dispatch(setMovieDetailsAction(r)));
