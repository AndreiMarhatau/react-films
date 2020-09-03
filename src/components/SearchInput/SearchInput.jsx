import React from 'react';
import styles from './SearchInput.scss';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  return <input value={props.value} onChange={props.onChange} className={styles.input} placeholder='What do you want to watch?'/>;
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchInput;