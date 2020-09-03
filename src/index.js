import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

const reduxStore = store;

ReactDOM.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);