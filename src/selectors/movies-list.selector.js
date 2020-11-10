const { createSelector } = require('reselect');

const moviesListSelector = createSelector((state) => state.movieList, (movieList) => movieList);

export default moviesListSelector;
