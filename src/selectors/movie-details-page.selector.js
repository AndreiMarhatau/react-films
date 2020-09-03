import { createSelector } from "reselect";

const movieDetailsSelector = createSelector(state => state.movieDetails, movieDetails => movieDetails);

export default movieDetailsSelector;