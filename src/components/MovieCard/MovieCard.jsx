import React, { useState } from 'react';
import styles from './MovieCard.scss';
import PropTypes from 'prop-types';
import MovieSettings from './MovieSettings/MovieSettings';
import ModalType from '../../utils/enums/ModalType';
import { useSelector } from 'react-redux';
import modalTypeSelector from '../../selectors/modal-type.selector';
import PosterImg from '../PosterImg/PosterImg';

const MovieCard = (props) => {
  const [hover, setHover] = useState(false);
  const modalType = useSelector(modalTypeSelector);

  if(modalType !== ModalType.none && hover === true){
    setHover(false);
  }

    return <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <a href='#' onClick={props.onClick}>
          <PosterImg className={styles.img} src={props.movie.poster_path} alt={props.movie.title}/>
        </a>
        <div className={styles.nameYearWrapper}>
          <span className={styles.name}>{props.movie.title}</span>
          <span className={styles.year}>{props.movie.release_date}</span>
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
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    vote_count: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
  }),
  onClick: PropTypes.func
}

export default MovieCard;