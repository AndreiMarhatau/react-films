import React, { useState, useContext } from 'react';
import styles from './MovieCard.scss';
import PropTypes from 'prop-types';
import MovieSettings from './MovieSettings/MovieSettings';
import { ModalContext } from '../../App';
import ModalType from '../../utils/enums/ModalType';

const MovieCard = (props) => {
  const [hover, setHover] = useState(false);
  const {modalType, setModalType} = useContext(ModalContext);

  if(modalType !== ModalType.none && hover === true){
    setHover(false);
  }

    return <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <a href='#' onClick={props.onClick}>
          <img className={styles.img} src={props.movie.photoUrl} alt={props.movie.name}/>
        </a>
        <div className={styles.nameYearWrapper}>
          <span className={styles.name}>{props.movie.name}</span>
          <span className={styles.year}>{props.movie.year}</span>
        </div>
        <span className={styles.genre}>{props.movie.genres.join(', ')}</span>
        {hover && <div className={styles.settings}>
          <MovieSettings/>
        </div>}
      </div>;
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number,
    photoUrl: PropTypes.string,
    year: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    voteAverage: PropTypes.number,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  onClick: PropTypes.func
}

export default MovieCard;