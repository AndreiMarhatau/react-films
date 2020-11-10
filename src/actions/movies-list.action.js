import { createAction } from 'redux-actions';
import consts from '../constants/consts';
import SortOrder from '../utils/enums/SortOrder';
import SearchBy from '../utils/enums/SearchBy';

import buildUrlData from '../utils/services/urlDataBuilder/urlDataBuilder';

export const getMoviesListAction = createAction('GET_MOVIE_LIST');

export function getMoviesList(sortBy = '', sortOrder = SortOrder.none, search = '', searchBy = SearchBy.none, filter = [''], offset = 0, limit = 10) {
  return (dispatch) => {
    fetch(`${consts.apiUrl}/movies${buildUrlData([...arguments], 'sortBy', 'sortOrder', 'search', 'searchBy', 'filter', 'offset', 'limit')}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((r) => dispatch(getMoviesListAction(r)));
  };
}
