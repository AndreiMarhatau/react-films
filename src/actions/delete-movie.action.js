const { createAction } = require("redux-actions");
const { default: consts } = require("../constants/consts");

export const deleteMovieAction = createAction('ADD_MOVIE');

export const deleteMovie = (id) => (dispatch) => {
  fetch(`${consts.apiUrl}/movies/${id}`, {
    method: 'DELETE',
  })
  .then(r => r.status)
  .then(r => dispatch(deleteMovieAction(r)));
}