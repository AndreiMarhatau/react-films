import { addMovieAction } from "../actions/add-movie.action";
import { updateMovieAction } from "../actions/update-movie.action";
import { deleteMovieAction } from "../actions/delete-movie.action";
import { clearStatusAction } from "../actions/status.action";

const { handleActions } = require("redux-actions");

const updateMoviesTriggerReducer = handleActions({
  [`${addMovieAction}`]: (state, {payload}) => {
    return payload === 201 ? {trigger: !state.trigger, status: 200 } : { ...state, status: payload };
  },
  [`${updateMovieAction}`]: (state, {payload}) => {
    return payload === 200 ? { trigger: !state.trigger, status: 200 } : { ...state, status: payload };
  },
  [`${deleteMovieAction}`]: (state, {payload}) => {
    return payload === 204 ? { trigger: !state.trigger, status: 200 } : { ...state, status: payload };
  },
  [`${clearStatusAction}`]: (state, {}) => {
    return {...state, status: null};
  }
}, {trigger: false, status: null});

export default updateMoviesTriggerReducer;