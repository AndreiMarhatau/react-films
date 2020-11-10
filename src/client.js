import React from 'react';
import { StaticRouter } from 'react-router';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);

ReactDOM.hydrate(
  <App store={state} router={StaticRouter}><StaticRouter><Page /></StaticRouter></App>,
  document.getElementById('root'),
);
