const { handleActions } = require('redux-actions');
const { getMoviesListAction } = require('../actions/movies-list.action');

const moviesListReducer = handleActions({
  [`${getMoviesListAction}`]: (state, { payload }) => payload,
}, { data: [], totalAmount: 0 });

export default moviesListReducer;
