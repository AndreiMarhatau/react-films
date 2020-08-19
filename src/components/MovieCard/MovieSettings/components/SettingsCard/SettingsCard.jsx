import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCard.scss';

const SettingsCard = (props) => {
  return <div className={styles.settingsCard}>
  <div className={styles.crossWrapper}>
    <img className={styles.cross} src='http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png' 
        onClick={props.crossClose}/>
  </div>
  <a className={styles.option} href='' onClick={props.editClick}>Edit</a>
  <a className={styles.option} href='' onClick={props.deleteClick}>Delete</a>
</div>
}

export default SettingsCard;

SettingsCard.propTypes = {
  crossClose: PropTypes.func,
  editClick: PropTypes.func,
  deleteClick: PropTypes.func
};