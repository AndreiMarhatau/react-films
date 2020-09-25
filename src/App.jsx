import React, { useState } from 'react';
import styles from './App.scss';
import SearchContainer from './modules/header/containers/SearchContainer/SearchContainer';
import MainContainer from './modules/movie-list/containers/MainContainer/MainContainer';
import FooterContainer from './modules/footer/FooterContainer/FooterContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MovieDetailsContainer from './modules/details/containers/MovieDetailsContainer/MovieDetailsContainer';
import { useSelector, useDispatch } from 'react-redux';
import movieDetailsSelector from './selectors/movie-details-page.selector';
import useMoviesUpdater from './utils/hooks/useMoviesUpdater';
import ModalContainer from './modules/modal/containers/ModalContainer/ModalContainer';

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