import React from 'react';
import styles from './MovieDetail.scss';
import PropTypes from 'prop-types';
import PosterImg from '../PosterImg/PosterImg';

const MovieDetail = (props) => {
  return (
    <div className={styles.container}>
      <PosterImg className={styles.img} src={props.movie.poster_path} alt={props.movie.title}/>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{props.movie.title}</span>
          <span className={styles.voteAverage}>{props.movie.vote_average}</span>
        </div>
        <span className={styles.tagline}>{props.movie.tagline}</span>
        <div className={styles.releaseAndRuntime}>
          <span className={styles.release}>{props.movie.release_date}</span>
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
  })
}

export default MovieDetail;