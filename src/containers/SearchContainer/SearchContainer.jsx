import React from 'react';
import styles from './SearchContainer.scss';
import NetFlixRoulette from '../../components/NetFlixRoulette/NetFlixRoulette';
import AddMovieButton from '../../components/AddMovieButton/AddMovieButton';
import SearchLabel from '../../components/SearchLabel/SearchLabel';
import SearchForm from '../SearchForm/SearchForm';

const SearchContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.netflix}>
          <NetFlixRoulette/>
        </div>
        <div className={styles.addmovie}>
          <AddMovieButton/>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.label}><SearchLabel/></div>
          <SearchForm/>
        </div>
      </div>
    </div>);
}

export default SearchContainer;