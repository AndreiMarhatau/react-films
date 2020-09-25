import React, { useContext, useEffect, useState, useCallback } from 'react';
import styles from './MovieDetailsContainer.scss';
import NetFlixRoulette from '../../../shared/NetFlixRoulette/NetFlixRoulette';
import GoToSearchButton from '../../components/GoToSearchButton/GoToSearchButton';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import usePreventHandler from '../../../../utils/hooks/usePreventHandler';
import { useDispatch, useSelector } from 'react-redux';
import movieDetailsSelector from '../../../../selectors/movie-details-page.selector';
import { setMovieDetails } from '../../../../actions/movie-details-page.action';
import movieSelector from '../../../../selectors/movie.selector';

const MovieDetailsContainer = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(movieDetailsSelector);
  const movie = useSelector(movieSelector(movieDetails));

  const closeDetails = usePreventHandler(() =>{ dispatch(setMovieDetails(null)); }, []);

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