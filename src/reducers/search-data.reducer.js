import { setSearchDataAction } from '../actions/search-data.action';
import SortOrder from '../utils/enums/SortOrder';
import SearchBy from '../utils/enums/SearchBy';

const { handleActions } = require('redux-actions');

const searchDataReducer = handleActions({
  [`${setSearchDataAction}`]: (state, { payload }) => ({ ...state, ...payload }),
}, {
  sortBy: '', sortOrder: SortOrder.none, search: '', searchBy: SearchBy.none, filter: [''], offset: 0, limit: 10,
});

export default searchDataReducer;
