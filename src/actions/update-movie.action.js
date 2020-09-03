const { createAction } = require("redux-actions");
const { default: consts } = require("../constants/consts");

export const updateMovieAction = createAction('ADD_MOVIE');

export const updateMovie = (data) => (dispatch) => {
  fetch(`${consts.apiUrl}/movies`, {
    method: 'PUT',
    body: data,
  })
  .then(r => r.status)
  .then(r => dispatch(updateMovieAction(r)));
}