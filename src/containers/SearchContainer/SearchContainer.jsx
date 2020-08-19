import React, { useContext } from 'react';
import styles from './SearchContainer.scss';
import NetFlixRoulette from '../../components/NetFlixRoulette/NetFlixRoulette';
import AddMovieButton from '../../components/AddMovieButton/AddMovieButton';
import SearchLabel from '../../components/SearchLabel/SearchLabel';
import SearchForm from '../SearchForm/SearchForm';
import { ModalContext } from '../../App';
import ModalType from '../../utils/enums/ModalType';

const SearchContainer = () => {
  const {modalType, setModalType} = useContext(ModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.netflix}>
          <NetFlixRoulette/>
        </div>
        <div className={styles.addmovie}>
          <AddMovieButton clickHandler={() => { setModalType(ModalType.add); }}/>
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