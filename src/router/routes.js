import FilmRoute from "./route-containers/FilmRoute";
import MainRoute from "./route-containers/MainRoute";
import SearchRoute from "./route-containers/SearchRoute";
import React from 'react';
import SearchContainer from "../modules/header/containers/SearchContainer/SearchContainer";
import MainContainer from "../modules/movie-list/containers/MainContainer/MainContainer";
import MovieDetailsContainer from "../modules/details/containers/MovieDetailsContainer/MovieDetailsContainer";
import NotFound from "./route-components/NotFound";

export const Routes = {
  main: {
    path: '/',
    exact: true,
    render: () => <MainRoute />,
  },
  error: {
    path: '/error',
    exact: false,
    render: () => <NotFound />,
  },
  details: {
    path: '/film/:id',
    basePath: '/film/',
    exact: false,
    render: () => <FilmRoute />,
  },
  search: {
    path: '/search/:query',
    basePath: '/search/',
    exact: false,
    render: () => <SearchRoute/>,
  },
}