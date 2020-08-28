import React, { useState, useCallback } from 'react';
import styles from './Edit.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import Consts from '../../../../constants/consts';
import Dropdown from '../../../../components/Dropdown/Dropdown';

const Edit = (props) => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState();
  const [movieUrl, setMovieUrl] = useState('');
  const [genre, setGenre] = useState([]);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  const titleChanged = useCallback((e) => setTitle(e.target.value), []);
  const releaseChanged = useCallback((e) => setReleaseDate(e.target.value), []);
  const movieUrlChanged = useCallback((e) => setMovieUrl(e.target.value), []);
  const genreChanged = useCallback((selected) => setGenre(selected), []);
  const overviewChanged = useCallback((e) => setOverview(e.target.value), []);
  const runtimeChanged = useCallback((e) => setRuntime(e.target.value), []);

  return <div className={sharedStyles.wrapper}>
    <div className={sharedStyles.modalWrapper}>
      <ModalWindow title='EDIT MOVIE' submitHandler={() => {}} cancelHandler={props.close}>
          <span className={sharedStyles.label}>MOVIE ID</span>
          <span className={styles.label}>MOCKID123</span>

          <span className={sharedStyles.label}>TITLE</span>
          <input value={title} className={sharedStyles.input} onChange={titleChanged}/>

          <span className={sharedStyles.label}>RELEASE DATE</span>
          <input type='date' value={releaseDate} className={sharedStyles.input} onChange={releaseChanged}/>

          <span className={sharedStyles.label}>MOVIE URL</span>
          <input value={movieUrl} className={sharedStyles.input} onChange={movieUrlChanged}/>
          
          <span className={sharedStyles.label}>GENRE</span>
          <Dropdown items={Consts.genres} selected={genre} onChange={genreChanged}/>
          
          <span className={sharedStyles.label}>OVERVIEW</span>
          <input value={overview} className={sharedStyles.input} onChange={overviewChanged}/>
          
          <span className={sharedStyles.label}>RUNTIME</span>
          <input value={runtime} className={sharedStyles.input} onChange={runtimeChanged}/>
      </ModalWindow>
    </div>
  </div> 
}

Edit.propTypes = {
  close: PropTypes.func,
}

export default Edit;