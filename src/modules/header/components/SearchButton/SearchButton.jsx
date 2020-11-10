import React from 'react';
import styles from './SearchButton.module.scss';
import PropTypes from 'prop-types';
import { Routes } from '../../../../router/routes';
import { Link } from 'react-router-dom';

const SearchButton = (props) => {
  return <Link to={`${Routes.search.basePath}${props.query}`} onClick={props.onClick} className={styles.button}>SEARCH</Link>;
}

SearchButton.propTypes = {
  query: PropTypes.string,
};

export default SearchButton;