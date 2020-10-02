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
import { Redirect, Route, Router, Switch } from 'react-router';
import MainRoute from './router/route-containers/MainRoute';
import FilmRoute from './router/route-containers/FilmRoute';
import SearchRoute from './router/route-containers/SearchRoute';
import { Routes } from './router/routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  useMoviesUpdater(dispatch);
  const movieDetails = useSelector(movieDetailsSelector);
  return (
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <Route path={Routes.main.path} exact={Routes.main.exact} render={Routes.main.render} />
              <Route path={Routes.details.path} exact={Routes.details.exact} render={Routes.details.render} />
              <Route path={Routes.search.path} exact={Routes.search.exact} render={Routes.search.render} />
              <Route path={Routes.search.basePath} exact={Routes.search.exact} render={Routes.search.render} />
              <Route path={Routes.error.path} exact={Routes.error.exact} render={Routes.error.render} />
              <Route path='*' render={() => <Redirect to={Routes.error.path}/>} />
            </Switch>
            <FooterContainer/>
            <ModalContainer/>
          </BrowserRouter>
        </ErrorBoundary>
  );
}

export default App;