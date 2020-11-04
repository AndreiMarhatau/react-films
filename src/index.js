import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Page from './Page';

const reduxStore = store;

ReactDOM.render(
        <App store={reduxStore} router={BrowserRouter}><BrowserRouter><Page/></BrowserRouter></App>,
    document.getElementById('root')
);