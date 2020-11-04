import React from 'react';
import styles from './MoviesCount.module.scss';
import PropTypes from 'prop-types';

const MoviesCount = (props) => {
    return <div className={styles.container}>
      <span className={styles.count}>{props.count}</span>
      <span className={styles.label}> movies found</span>
    </div>
}

MoviesCount.propTypes = {
  count: PropTypes.number
}

export default MoviesCount;