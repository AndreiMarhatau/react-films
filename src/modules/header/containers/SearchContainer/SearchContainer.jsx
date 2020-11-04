import React, { useCallback } from 'react';
import styles from './SearchContainer.module.scss';
import NetFlixRoulette from '../../../shared/NetFlixRoulette/NetFlixRoulette';
import AddMovieButton from '../../components/AddMovieButton/AddMovieButton';
import SearchLabel from '../../components/SearchLabel/SearchLabel';
import SearchForm from '../SearchForm/SearchForm';
import ModalType from '../../../../utils/enums/ModalType';
import { useDispatch } from 'react-redux';
import { setModalType } from '../../../../actions/modal-type.action';

const SearchContainer = () => {
  const dispatch = useDispatch();

  const setAdd = useCallback(() => { dispatch(setModalType(ModalType.add)); }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.netflix}>
          <NetFlixRoulette/>
        </div>
        <div className={styles.addmovie}>
          <AddMovieButton clickHandler={setAdd}/>
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