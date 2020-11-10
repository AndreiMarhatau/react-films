import { addMovieAction } from '../actions/add-movie.action';
import { updateMovieAction } from '../actions/update-movie.action';
import { deleteMovieAction } from '../actions/delete-movie.action';
import { clearStatusAction } from '../actions/status.action';

const { handleActions } = require('redux-actions');

const updateMoviesTriggerReducer = handleActions({
  [`${addMovieAction}`]: (state, { payload }) => (payload === 201 ? { trigger: !state.trigger, status: 200 } : { ...state, status: payload }),
  [`${updateMovieAction}`]: (state, { payload }) => (payload === 200 ? { trigger: !state.trigger, status: 200 } : { ...state, status: payload }),
  [`${deleteMovieAction}`]: (state, { payload }) => (payload === 204 ? { trigger: !state.trigger, status: 200 } : { ...state, status: payload }),
  [`${clearStatusAction}`]: (state, {}) => ({ ...state, status: null }),
}, { trigger: false, status: null });

export default updateMoviesTriggerReducer;
