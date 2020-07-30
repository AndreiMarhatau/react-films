import React from 'react';
import styles from './App.scss';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import MainContainer from './containers/MainContainer/MainContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <SearchContainer/>
            <MainContainer/>
            <FooterContainer/>
        </ErrorBoundary>
    );
}

export default App;