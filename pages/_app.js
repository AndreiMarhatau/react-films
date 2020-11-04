import '../src/styles.css';
import React from 'react';
import App from '../src/App';
import { StaticRouter } from 'react-router';
import store from '../src/store/store';
import Page from '../src/Page';
import FooterContainer from '../src/modules/footer/FooterContainer/FooterContainer';
import ModalContainer from '../src/modules/modal/containers/ModalContainer/ModalContainer';

function MyApp({ Component, pageProps }) {
  return <App store={store}>
    <Component {...pageProps} />
    <FooterContainer/>
    <ModalContainer/>
  </App>
}

export default MyApp