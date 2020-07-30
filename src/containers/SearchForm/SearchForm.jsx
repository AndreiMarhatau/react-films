import React from 'react';
import styles from './SearchForm.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchButton from '../../components/SearchButton/SearchButton';

const SearchForm = () => {
  return <div className={styles.form}>
    <div className={styles.input}>
      <SearchInput/>
    </div>
    <SearchButton/>
  </div>;
}

export default SearchForm;