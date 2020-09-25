const { createAction } = require("redux-actions");
const { default: consts } = require("../constants/consts");

export const updateMovieAction = createAction('UPDATE_MOVIE');

export const updateMovie = (data) => (dispatch) => {
  fetch(`${consts.apiUrl}/movies`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(r => r.status)
  .then(r => dispatch(updateMovieAction(r)));
}