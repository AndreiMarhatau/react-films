import React from 'react';
import styles from './FooterContainer.scss';
import NetFlixRoulette from '../../components/NetFlixRoulette/NetFlixRoulette';

const FooterContainer = () => {
    return <div className={styles.container}>
      <NetFlixRoulette/>
    </div>;
}

export default FooterContainer;