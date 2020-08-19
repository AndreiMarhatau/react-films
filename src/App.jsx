import React, { useState } from 'react';
import styles from './App.scss';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import MainContainer from './containers/MainContainer/MainContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ModalType from './utils/enums/ModalType';
import ModalContainer from './containers/ModalContainer/ModalContainer';

export const ModalContext = React.createContext();

const App = () => {
  const [modalType, setModalType] = useState(ModalType.none);
  return (
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
        <SearchContainer/>
        <MainContainer/>
        <FooterContainer/>
        <ModalContainer/>
      </ErrorBoundary>
    </ModalContext.Provider>
  );
}

export default App;