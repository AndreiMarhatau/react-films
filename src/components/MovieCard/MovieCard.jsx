import React, { useState } from 'react';
import styles from './MovieCard.scss';
import PropTypes from 'prop-types';
import MovieSettings from './MovieSettings/MovieSettings';

const MovieCard = (props) => {
  const [hover, setHover] = useState(false);

    return <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img className={styles.img} src={props.movie.photoUrl} alt={props.movie.name}/>
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
    name: PropTypes.string,
    year: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  })
}

export default MovieCard;