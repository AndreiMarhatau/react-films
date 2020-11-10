const { createAction } = require('redux-actions');

export const setSearchDataAction = createAction('SET_SEARCH_DATA');

export const setSort = (sortBy, sortOrder) => setSearchDataAction({ sortBy, sortOrder });
export const setSearch = (search, searchBy) => setSearchDataAction({ search, searchBy });
export const setFilter = (filter) => setSearchDataAction({ filter });
export const setOffset = (offset) => setSearchDataAction({ offset });
export const setLimit = (limit) => setSearchDataAction({ limit });
