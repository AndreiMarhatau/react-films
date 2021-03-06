const { createAction } = require('redux-actions');
const { default: consts } = require('../constants/consts');

export const addMovieAction = createAction('ADD_MOVIE');

export const addMovie = (data) => (dispatch) => {
  fetch(`${consts.apiUrl}/movies`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((r) => r.status)
    .then((r) => dispatch(addMovieAction(r)));
};
