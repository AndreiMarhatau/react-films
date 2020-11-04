import React from 'react';
import { Routes } from '../../../router/routes';
import styles from './NetFlixRoulette.module.scss';

const NetFlixRoulette = () => {
  return <a href={Routes.main.path} className={styles.text}>
      <span className={styles.bold}>netflix</span><span>roulette</span>
    </a>;
}

export default NetFlixRoulette;