import React from 'react';
import styles from './AddMovieButton.module.scss';
import PropTypes from 'prop-types';

const AddMovieButton = (props) => {
  return <a className={styles.addmovie} onClick={props.clickHandler}>+ ADD MOVIE</a>;
}

AddMovieButton.propTypes = {
  clickHandler: PropTypes.func,
};

export default AddMovieButton;