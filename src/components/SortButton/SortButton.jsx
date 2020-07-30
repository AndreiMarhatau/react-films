import React from 'react';
import styles from './SortButton.scss';
import classNames from 'classnames';

const SortButton = (props) => {
  return <div className={styles.container}>
    <a href='' className={styles.button} onClick={props.clickHandler}>{props.text}</a>
    {props.isActive ? props.descending ? 
      <span className={classNames(styles.arrow, styles.descending)}></span> : 
      <span className={classNames(styles.arrow, styles.ascending)}></span> : null}
  </div>;
}

export default SortButton;