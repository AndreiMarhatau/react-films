import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingImg.scss';

const SettingImg = (props) => {
  return <img className={styles.settings} src='https://static.thenounproject.com/png/384288-200.png' alt='settings' onClick={props.clickHandler}/>
}

export default SettingImg;

SettingImg.propTypes = {
  clickHandler: PropTypes.func,
};