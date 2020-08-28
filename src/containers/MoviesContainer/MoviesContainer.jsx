import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import styles from './MoviesContainer.scss';
import MoviesCount from '../../components/MoviesCount/MoviesCount';
import MovieCard from '../../components/MovieCard/MovieCard';
import consts from '../../constants/consts';
import { MovieDetails } from '../../App';

const MoviesContainer = () => {
  //Here will be selectors when we use redux
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const {movieDetails, setMovieDetails} = useContext(MovieDetails);

  const moviesMap = useMemo(() => movies.map(movie => <MovieCard onClick={() => { setMovieDetails(movie.id); }} key={movie.id} movie={movie}/>), [movies]);

  useEffect(() => {
    //Here will be action execution when we use redux
    setCount(consts.count);
    setMovies(consts.movies);
  }, [])

    return <div>
      <div className={styles.count}><MoviesCount count={count}/></div>
      <div className={styles.movies}>
        {moviesMap}
      </div>
    </div>;
}

export default MoviesContainer;