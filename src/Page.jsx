import React from 'react';
import FooterContainer from './modules/footer/FooterContainer/FooterContainer';
import ModalContainer from './modules/modal/containers/ModalContainer/ModalContainer';
import { Redirect, Route, Switch } from 'react-router';
import { Routes } from './router/routes';
import { useDispatch } from 'react-redux';
import useMoviesUpdater from './utils/hooks/useMoviesUpdater';

const Page = () => {
  const dispatch = useDispatch();
  useMoviesUpdater(dispatch);
  return <>
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
  </>
}

export default Page;