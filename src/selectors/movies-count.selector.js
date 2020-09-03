const { createSelector } = require("reselect");

const moviesCountSelector = createSelector(state => state.movieList.totalAmount, totalAmount => totalAmount);

export default moviesCountSelector;