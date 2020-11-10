const { createSelector } = require('reselect');

export const filteredByRatingMoviesSelector = (ratingFrom, ratingTo) => createSelector(
  (state) => state.movieList.data,
  (data) => data.filter((item) => item.vote_average >= ratingFrom && item.vote_average <= ratingTo),
);

export const filteredByReleaseDateMoviesSelector = (dateFrom, dateTo) => createSelector(
  (state) => state.movieList.data,
  (data) => data.filter((item) => new Date(dateFrom) <= new Date(item.release_date) && new Date(dateTo) >= new Date(item.release_date)),
);
