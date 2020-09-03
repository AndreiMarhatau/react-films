import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import styles from './MoviesContainer.scss';
import MoviesCount from '../../components/MoviesCount/MoviesCount';
import MovieCard from '../../components/MovieCard/MovieCard';
import consts from '../../constants/consts';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetails } from '../../actions/movie-details-page.action';
import moviesCountSelector from '../../selectors/movies-count.selector';
import moviesDataSelector from '../../selectors/movies-data.selector';
import { getMoviesList } from '../../actions/movies-list.action';
import useMoviesUpdater from '../../utils/hooks/useMoviesUpdater';

const MoviesContainer = () => {
  //Here will be selectors when we use redux
  const count = useSelector(moviesCountSelector);
  const movies = useSelector(moviesDataSelector);
  const dispatch = useDispatch();

  const moviesMap = useMemo(() => 
    movies.map(movie => <MovieCard onClick={() => { dispatch(setMovieDetails(movie.id)); }} key={movie.id} movie={movie}/>), [movies]);

  useMoviesUpdater();

    return <div>
      <div className={styles.count}><MoviesCount count={count}/></div>
      <div className={styles.movies}>
        {moviesMap}
      </div>
    </div>;
}

export default MoviesContainer;