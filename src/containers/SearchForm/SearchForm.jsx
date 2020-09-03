import React, { useState, useCallback } from 'react';
import styles from './SearchForm.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchButton from '../../components/SearchButton/SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import usePreventHandler from '../../utils/hooks/usePreventHandler';
import { setSearch } from '../../actions/search-data.action';
import SearchBy from '../../utils/enums/SearchBy';
import { searchDataSearchSelector } from '../../selectors/search-data.selector';

const SearchForm = () => {
  const search = useSelector(searchDataSearchSelector);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();

  const changeHandler = useCallback((e) => setInput(e.target.value), []);

  const clickHandler = usePreventHandler(() => {
    dispatch(setSearch(input, SearchBy.title));
  }, [input]);

  return <div className={styles.form}>
    <div className={styles.input}>
      <SearchInput onChange={changeHandler} value={input}/>
    </div>
    <SearchButton onClick={clickHandler}/>
  </div>;
}

export default SearchForm;