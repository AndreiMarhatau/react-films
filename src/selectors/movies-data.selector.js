const { createSelector } = require('reselect');

const moviesDataSelector = createSelector((state) => state.movieList.data, (data) => data);

export default moviesDataSelector;
