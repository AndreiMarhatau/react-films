import React from 'react';
import styles from './FooterContainer.module.scss';
import NetFlixRoulette from '../../shared/NetFlixRoulette/NetFlixRoulette';

const FooterContainer = () => {
    return <div className={styles.container}>
      <NetFlixRoulette/>
    </div>;
}

export default FooterContainer;