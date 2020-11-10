const { createSelector } = require('reselect');

export const searchDataFilterSelector = createSelector((state) => state.searchData, (searchData) => searchData.filter);
export const searchDataLimitSelector = createSelector((state) => state.searchData, (searchData) => searchData.limit);
export const searchDataOffsetSelector = createSelector((state) => state.searchData, (searchData) => searchData.offset);
export const searchDataSearchSelector = createSelector((state) => state.searchData, (searchData) => searchData.search);
export const searchDataSearchBySelector = createSelector((state) => state.searchData, (searchData) => searchData.searchBy);
export const searchDataSortOrderSelector = createSelector((state) => state.searchData, (searchData) => searchData.sortOrder);
export const searchDataSortBySelector = createSelector((state) => state.searchData, (searchData) => searchData.sortBy);
