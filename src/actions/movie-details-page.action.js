const { createAction } = require("redux-actions");

export const setMovieDetailsAction = createAction('SET_MOVIE_DETAILS');

export const setMovieDetails = (movieId) => {
  return setMovieDetailsAction(movieId);
}