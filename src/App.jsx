import React, { useState } from 'react';
import styles from './App.scss';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import MainContainer from './containers/MainContainer/MainContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ModalContainer from './containers/ModalContainer/ModalContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer/MovieDetailsContainer';
import { useSelector, useDispatch } from 'react-redux';
import movieDetailsSelector from './selectors/movie-details-page.selector';
import useMoviesUpdater from './utils/hooks/useMoviesUpdater';

const App = () => {
  const dispatch = useDispatch();
  useMoviesUpdater(dispatch);
  const movieDetails = useSelector(movieDetailsSelector);
  return (
        <ErrorBoundary>
          {movieDetails !== null ? <MovieDetailsContainer/> : <SearchContainer/>}
          <MainContainer/>
          <FooterContainer/>
          <ModalContainer/>
        </ErrorBoundary>
  );
}

export default App;