import React from 'react';
import styles from './FallbackUI.module.scss';

const FallbackUI = () => {
  return <span className={styles.span}>
    Oops... Something went wrong. Please, try to refresh the page.
  </span>;
}

export default FallbackUI;