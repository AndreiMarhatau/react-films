const { createSelector } = require("reselect");

const movieSelector = (id) => createSelector(state => state.movieList.data, data => data.find(item => item.id === id));

export default movieSelector;