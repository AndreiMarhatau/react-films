import React from 'react';
import styles from './GoToSearchButton.module.scss';
import PropTypes from 'prop-types';


const GoToSearchButton = () => {
  return <a href='search'>
      <img className={styles.img} src='https://freeiconshop.com/wp-content/uploads/edd/search-flat.png'/>
    </a>
}


export default GoToSearchButton;