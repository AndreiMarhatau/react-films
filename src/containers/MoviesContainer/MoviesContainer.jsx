import React, { useState, useEffect } from 'react';
import styles from './MoviesContainer.scss';
import MoviesCount from '../../components/MoviesCount/MoviesCount';
import MovieCard from '../../components/MovieCard/MovieCard';
import consts from '../../constants/consts';

const MoviesContainer = () => {
  //Here will be selectors when we use redux
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Here will be action execution when we use redux
    setCount(consts.count);
    setMovies(consts.movies);
  }, [])

    return <div>
      <div className={styles.count}><MoviesCount count={count}/></div>
      <div className={styles.movies}>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>;
}

export default MoviesContainer;