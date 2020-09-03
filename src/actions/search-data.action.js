const { createAction } = require("redux-actions");

export const setSearchDataAction = createAction('SET_SEARCH_DATA');

export const setSort = (sortBy, sortOrder) => {
  return setSearchDataAction({sortBy: sortBy, sortOrder: sortOrder});
}
export const setSearch = (search, searchBy) => {
  return setSearchDataAction({search: search, searchBy: searchBy});
}
export const setFilter = (data) => {
  return setSearchDataAction({filter: data});
}
export const setOffset = (data) => {
  return setSearchDataAction({offset: data});
}
export const setLimit = (data) => {
  return setSearchDataAction({limit: data});
}