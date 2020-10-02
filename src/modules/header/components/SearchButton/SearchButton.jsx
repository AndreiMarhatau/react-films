import React from 'react';
import styles from './SearchButton.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../router/routes';

const SearchButton = (props) => {
  return <Link to={`${Routes.search.basePath}${props.query}`} onClick={props.onClick} className={styles.button}>SEARCH</Link>;
}

SearchButton.propTypes = {
  query: PropTypes.string,
};

export default SearchButton;