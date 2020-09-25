const { createAction } = require("redux-actions");
const { default: consts } = require("../constants/consts");

export const deleteMovieAction = createAction('DELETE_MOVIE');

export const deleteMovie = (id) => (dispatch) => {
  fetch(`${consts.apiUrl}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(r => r.status)
  .then(r => dispatch(deleteMovieAction(r)));
}