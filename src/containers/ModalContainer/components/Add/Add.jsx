import React, { useState } from 'react';
import styles from './Add.scss';
import sharedStyles from '../Shared.scss';
import PropTypes from 'prop-types';
import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import Consts from '../../../../constants/consts'
import Dropdown from '../../../../components/Dropdown/Dropdown';

const Add = (props) => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState();
  const [movieUrl, setMovieUrl] = useState('');
  const [genre, setGenre] = useState([]);
  const [overview, setOverview] = useState('');
  const [runtime, setRuntime] = useState('');

  return <div className={sharedStyles.wrapper}>
    <div className={sharedStyles.modalWrapper}>
      <ModalWindow title='ADD MOVIE' submitHandler={() => {}} cancelHandler={props.close}>
          <span className={sharedStyles.label}>TITLE</span>
          <input value={title} className={sharedStyles.input} onChange={(e) => setTitle(e.target.value)}/>

          <span className={sharedStyles.label}>RELEASE DATE</span>
          <input type='date' value={releaseDate} className={sharedStyles.input} onChange={(e) => setReleaseDate(e.target.value)}/>

          <span className={sharedStyles.label}>MOVIE URL</span>
          <input value={movieUrl} className={sharedStyles.input} onChange={(e) => setMovieUrl(e.target.value)}/>
          
          <span className={sharedStyles.label}>GENRE</span>
          <Dropdown items={Consts.genres} selected={genre} onChange={(selected) => setGenre(selected)}/>
          
          <span className={sharedStyles.label}>OVERVIEW</span>
          <input value={overview} className={sharedStyles.input} onChange={(e) => setOverview(e.target.value)}/>
          
          <span className={sharedStyles.label}>RUNTIME</span>
          <input value={runtime} className={sharedStyles.input} onChange={(e) => setRuntime(e.target.value)}/>
      </ModalWindow>
    </div>
  </div> 
}

Add.propTypes = {
  close: PropTypes.func,
}

export default Add;