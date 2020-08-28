import React from 'react';
import styles from './MovieDetail.scss';
import PropTypes from 'prop-types';

const MovieDetail = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.movie.photoUrl}/>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{props.movie.name}</span>
          <span className={styles.voteAverage}>{props.movie.voteAverage}</span>
        </div>
        <span className={styles.tagline}>{props.movie.tagline}</span>
        <div className={styles.releaseAndRuntime}>
          <span className={styles.release}>{props.movie.year}</span>
          <span className={styles.runtime}>{props.movie.runtime} min</span>
        </div>
        <span className={styles.description}>{props.movie.overview}</span>
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
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
  })
}

export default MovieDetail;