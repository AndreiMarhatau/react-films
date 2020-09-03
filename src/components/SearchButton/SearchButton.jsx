import React from 'react';
import styles from './SearchButton.scss';
import PropTypes from 'prop-types';

const SearchButton = (props) => {
  return <a href='' onClick={props.onClick} className={styles.button}>SEARCH</a>;
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

export default SearchButton;