import { setMovieDetails } from "../../actions/movie-details-page.action";
import updateMoviesTriggerSelector from "../../selectors/update-movies-trigger.selector";

const { useSelector, useDispatch } = require("react-redux")
const { searchDataSortBySelector, searchDataSortOrderSelector, searchDataSearchSelector, searchDataSearchBySelector, searchDataFilterSelector, searchDataOffsetSelector, searchDataLimitSelector } = require("../../selectors/search-data.selector");
const { useEffect } = require("react");
const { getMoviesList } = require("../../actions/movies-list.action");

const useMoviesUpdater = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(searchDataSortBySelector);
  const sortOrder = useSelector(searchDataSortOrderSelector);
  const search = useSelector(searchDataSearchSelector);
  const searchBy = useSelector(searchDataSearchBySelector);
  const filter = useSelector(searchDataFilterSelector);
  const offset = useSelector(searchDataOffsetSelector);
  const limit = useSelector(searchDataLimitSelector);
  const trigger = useSelector(updateMoviesTriggerSelector);

  useEffect(() => {
    dispatch(setMovieDetails(null));
    dispatch(getMoviesList(sortBy, sortOrder, search, searchBy, filter, offset, limit));
  }, [sortBy, sortOrder, search, searchBy, filter, offset, limit, trigger]);
}

export default useMoviesUpdater;