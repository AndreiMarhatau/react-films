const { createSelector } = require("reselect");

export const updateMoviesTriggerSelector = createSelector(state => state.updateMoviesTrigger, trigger => trigger.trigger);

export const updateMoviesStatusSelector = createSelector(state => state.updateMoviesTrigger, trigger => trigger.status);