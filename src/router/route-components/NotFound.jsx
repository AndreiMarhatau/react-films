import React from 'react';
import NetFlixRoulette from '../../modules/shared/NetFlixRoulette/NetFlixRoulette';
import { Routes } from '../routes';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.netflixroulette}>
        <NetFlixRoulette />
      </div> <div></div>
    </div>
    <span className={styles.notFound}>
      Page Not Found
    </span>
    <span className={styles.number}>
      404
    </span>
    <a href={Routes.main.path} className={styles.button}>
      GO BACK TO HOME
    </a>
  </div>
  );
}

export default NotFound;