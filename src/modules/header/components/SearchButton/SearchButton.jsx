import React from 'react';
import styles from './SearchButton.module.scss';
import PropTypes from 'prop-types';
import { Routes } from '../../../../router/routes';

const SearchButton = (props) => {
  return <a href={`${Routes.search.basePath}${props.query}`} onClick={props.onClick} className={styles.button}>SEARCH</a>;
}

SearchButton.propTypes = {
  query: PropTypes.string,
};

export default SearchButton;