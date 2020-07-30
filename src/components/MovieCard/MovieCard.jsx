import React from 'react';
import styles from './MovieCard.scss';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
    return <div className={styles.container}>
        <img className={styles.img} src={props.movie.photoUrl} alt={props.movie.name}/>
        <div className={styles.nameYearWrapper}>
          <span className={styles.name}>{props.movie.name}</span>
          <span className={styles.year}>{props.movie.year}</span>
        </div>
        <span className={styles.genre}>{props.movie.genres.join(', ')}</span>
        <img className={styles.settings} src='https://static.thenounproject.com/png/384288-200.png' alt='settings'/>
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