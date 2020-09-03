import { addMovieAction } from "../actions/add-movie.action";
import { updateMovieAction } from "../actions/update-movie.action";
import { deleteMovieAction } from "../actions/delete-movie.action";

const { handleActions } = require("redux-actions");

const updateMoviesTriggerReducer = handleActions({
  [`${addMovieAction}`]: (state, {payload}) => {
    return payload === 201 && !state;
  },
  [`${updateMovieAction}`]: (state, {payload}) => {
    return payload === 200 && !state;
  },
  [`${deleteMovieAction}`]: (state, {payload}) => {
    return payload === 204 && !state;
  },
}, false);

export default updateMoviesTriggerReducer;