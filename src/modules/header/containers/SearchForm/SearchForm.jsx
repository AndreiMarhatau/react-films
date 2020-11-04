import React, { useState, useCallback } from 'react';
import styles from './SearchForm.module.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchButton from '../../components/SearchButton/SearchButton';

const SearchForm = () => {
  const [input, setInput] = useState('');

  const changeHandler = useCallback((e) => setInput(e.target.value), []);

  return <div className={styles.form}>
    <div className={styles.input}>
      <SearchInput onChange={changeHandler} value={input}/>
    </div>
    <SearchButton query={input}/>
  </div>;
}

export default SearchForm;