import React from 'react';
import styles from './GoToSearchButton.scss';
import PropTypes from 'prop-types';

const GoToSearchButton = (props) => {
  return <a href='' onClick={props.onClick}>
    <img className={styles.img} src='https://freeiconshop.com/wp-content/uploads/edd/search-flat.png'/></a>
}

GoToSearchButton.propTypes = {
  onClick: PropTypes.func,
}

export default GoToSearchButton;