import { combineReducers } from "redux";
import movieDetailsPageReducer from "../reducers/movie-details-page.reducer";
import modalTypeReducer from "../reducers/modal-type.reducer";
import moviesListReducer from "../reducers/movies-list.reducer";
import setSearchDataReducer from '../reducers/search-data.reducer';
import updateMoviesTriggerReducer from "../reducers/update-movies-trigger.reducer";

export default combineReducers({
  movieDetails: movieDetailsPageReducer,
  modalType: modalTypeReducer,
  movieList: moviesListReducer,
  searchData: setSearchDataReducer,
  updateMoviesTrigger: updateMoviesTriggerReducer,
});