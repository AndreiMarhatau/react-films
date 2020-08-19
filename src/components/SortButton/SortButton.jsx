import React from 'react';
import styles from './SortButton.scss';
import PropTypes from 'prop-types';
import Arrow from '../Arrow/Arrow';

const SortButton = (props) => {
  return <div className={styles.container}>
    <a href='' className={styles.button} onClick={props.clickHandler}>{props.text}</a>
    {props.isActive ? <Arrow descending={props.descending} /> : null}
  </div>;
}

SortButton.propTypes = {
  isActive: PropTypes.bool,
  descending: PropTypes.bool,
  text: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default SortButton;