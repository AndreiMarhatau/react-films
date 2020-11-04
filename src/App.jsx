import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';

const App = (props) => {
  return (
      <Provider store={props.store} router={props.router}>
        <ErrorBoundary>
          {props.children}
        </ErrorBoundary>
      </Provider>
  );
}

export default App;