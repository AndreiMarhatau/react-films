import React from 'react';
import styles from './GoToSearchButton.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const GoToSearchButton = () => {
  return <Link to='search'>
      <img className={styles.img} src='https://freeiconshop.com/wp-content/uploads/edd/search-flat.png'/>
    </Link>
}


export default GoToSearchButton;