import React, { useContext, useEffect, useState, useCallback } from 'react';
import styles from './MovieDetailsContainer.scss';
import NetFlixRoulette from '../../components/NetFlixRoulette/NetFlixRoulette';
import GoToSearchButton from '../../components/GoToSearchButton/GoToSearchButton';
import { MovieDetails } from '../../App';
import consts from '../../constants/consts';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import usePreventHandler from '../../utils/hooks/usePreventHandler';

const MovieDetailsContainer = () => {
  const {movieDetails, setMovieDetails} = useContext(MovieDetails);
  const [movie, setMovie] = useState({});

  const closeDetails = usePreventHandler(() =>{ setMovieDetails(null); }, []);

  useEffect(() => {
    setMovie(consts.movies.find(item => item.id === movieDetails));
  }, [movieDetails]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NetFlixRoulette/>
        <GoToSearchButton onClick={closeDetails}/>
      </div>
      <div className={styles.detail}>
        <MovieDetail movie={movie}/>
      </div>
    </div>
  )
}

export default MovieDetailsContainer;