/// PATTERN: Lazy loading
import React, { Suspense } from 'react';
const FilmRoute = React.lazy(() => import('./route-containers/FilmRoute'));
const MainRoute = React.lazy(() => import('./route-containers/MainRoute'));
const SearchRoute = React.lazy(() => import('./route-containers/SearchRoute'));
const NotFound = React.lazy(() => import('./route-components/NotFound'));

export const Routes = {
  main: {
    path: '/',
    exact: true,
    render: () => <Suspense fallback={'Loading...'}><MainRoute /></Suspense>,
  },
  error: {
    path: '/error',
    exact: false,
    render: () => <Suspense fallback={'Loading...'}><NotFound /></Suspense>,
  },
  details: {
    path: '/film/:id',
    basePath: '/film/',
    exact: false,
    render: () => <Suspense fallback={'Loading...'}><FilmRoute /></Suspense>,
  },
  search: {
    path: '/search/:query',
    basePath: '/search/',
    exact: false,
    render: () => <Suspense fallback={'Loading...'}><SearchRoute /></Suspense>,
  },
};
