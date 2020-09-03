const { createSelector } = require("reselect");

const updateMoviesTriggerSelector = createSelector(state => state.updateMoviesTrigger, trigger => trigger);

export default updateMoviesTriggerSelector;