import React, { useState } from 'react';
import styles from './App.scss';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import MainContainer from './containers/MainContainer/MainContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ModalType from './utils/enums/ModalType';
import ModalContainer from './containers/ModalContainer/ModalContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer/MovieDetailsContainer';

export const ModalContext = React.createContext();
export const MovieDetails = React.createContext();
const App = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [modalType, setModalType] = useState(ModalType.none);
  return (
    <MovieDetails.Provider value={{
      movieDetails: movieDetails,
      setMovieDetails: setMovieDetails}}>
      <ModalContext.Provider value={{
          modalType: modalType,
          setModalType: (type) => {
            for(var key in ModalType){
              if(ModalType[key] === type){
                setModalType(type);
                return;
              }
            }
          }
        }}>
        <ErrorBoundary>
          {movieDetails !== null ? <MovieDetailsContainer/> : <SearchContainer/>}
          <MainContainer/>
          <FooterContainer/>
          <ModalContainer/>
        </ErrorBoundary>
      </ModalContext.Provider>
    </MovieDetails.Provider>
  );
}

export default App;