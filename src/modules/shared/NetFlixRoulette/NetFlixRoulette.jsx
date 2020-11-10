import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../router/routes';
import styles from './NetFlixRoulette.module.scss';

const NetFlixRoulette = () => {
  return <Link to={Routes.main.path} className={styles.text}>
      <span className={styles.bold}>netflix</span><span>roulette</span>
    </Link>;
}

export default NetFlixRoulette;